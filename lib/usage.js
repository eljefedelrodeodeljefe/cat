'use strict'
const allowOptions = [
  'b','e','n','s','t','u','v'
]

const illegalOption = exports.illegalOption = function illegalOption (option) {
  let str = `cat: illegal option -- ${option}`
  console.log(str);
}

const usage = exports.usage = function usage () {
  let help = `usage: cat [-benstuv] [file ...]`
  console.log(help);
}

exports.parseOptions = function parseOptions (argv) {
  let opts = []
  argv.shift()
  argv.forEach(function argParseCb (el) {
    if (allowOptions.indexOf(el) === -1) {
      illegalOption(el)
      usage()
      return
    }
    opts.push(el)
  })
}
