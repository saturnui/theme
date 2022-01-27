const plugin = require('tailwindcss/plugin')
const components = require('./components')

module.exports.safelist = require('./safelist')

const tailwind = plugin(({ addComponents }) => {
  addComponents(components)
})

module.exports = tailwind