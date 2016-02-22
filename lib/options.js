'use strict'
const allowOptions = [
  'b','e','n','s','t','u','v'
]

exports.parseOptions = function parseOptions (optionsStr) {
  let opts = []
  let argv = optionsStr.split('')
  argv.shift()

  argv.forEach(function argParseCb (el) {
    if (allowOptions.indexOf(el) === -1) {
      illegalOption(el)
      usage()
      return
    }
    opts.push(el)
  })
  return opts
}

exports.handleOptions = function handleOptions (opts) {
  return {

  }
}
