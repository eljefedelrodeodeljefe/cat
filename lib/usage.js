'use strict'

const illegalOption = exports.illegalOption = function illegalOption (option) {
  let str = `cat: illegal option -- ${option}`
  console.log(str);
}

const usage = exports.usage = function usage () {
  let help = `usage: cat [-benstuv] [file ...]`
  console.log(help);
}
