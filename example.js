const number2subscript = require('./tinyDigits').number2subscript
const number2superscript = require('./tinyDigits').number2superscript
console.log('123 -> ' + number2superscript(123))
console.log('123 -> ' + number2subscript(123))
console.log('-123 -> ' + number2superscript(-123))
console.log('-123 -> ' + number2subscript(-123))
