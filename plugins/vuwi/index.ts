import fs from 'fs'
import path from 'path'
import postcss from 'postcss'
import postcssJs from 'postcss-js'

const distDir = path.join(__dirname, '..', '..', 'dist')

const fp = (...args: any[]) => {
  return path.join(distDir, ...args)
}

const println = (...args: any[]) => {
  return console.log(path.join(...args))
}

const stringify = (obj: any) => {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object') stringify(value)
    else obj[key] = `${value}`
  }
  return obj
}

const copyDir = async (src: string, dest: string) => {
  fs.mkdirSync(dest, { recursive: true });
  let entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    entry.isDirectory() ?
      copyDir(srcPath, destPath) :
      fs.copyFileSync(srcPath, destPath);
  }
}

export default () => {
  return {
    name: 'vuwi-plugin', // required, will show up in warnings and errors
    closeBundle() {
      println('vuwi-plugin::closeBundle')

      if (fs.existsSync(fp('vuwi.es.js'))) fs.unlinkSync(fp('vuwi.es.js'))
      if (fs.existsSync(fp('style.css'))) fs.renameSync(fp('style.css'), fp('vuwi.css'))
      println('cleanup')

      // Generate components
      const css = fs.readFileSync(fp('vuwi.css'), 'utf8')
      const root = postcss.parse(css)
      const js = postcssJs.objectify(root)
      const jss = stringify(js)
      const components = JSON.stringify(jss, null, '  ')
      fs.writeFileSync(fp('components.js'), `module.exports = ${components}`)
      println('components.js')

      // Generate safelist
      const s = JSON.stringify(js, null, '  ')
      const matches = s.match(/sa-[\w-]+/gi)
      const uniq = [...new Set(matches)]
      fs.writeFileSync(fp('safelist.js'), `module.exports = ${JSON.stringify(uniq, null, '  ')}`)
      println('safelist.js')

      // Copy packages
      copyDir(path.join(__dirname, 'assets'), distDir)
    }
  }
}