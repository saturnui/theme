const plugin = require('windicss/plugin')
const components = require('./components')

module.exports.safelist = require('./safelist')

module.exports.vuwi = () => {
  return plugin(({ addComponents }) => {
    addComponents(components)
  })
}