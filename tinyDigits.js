function replaceSuperscript(n) {
  switch(n) {
    case '1':
      return '¹'
    case '2':
      return '²'
    case '3':
      return '³'
    case '4':
      return '⁴'
    case '5':
      return '⁵'
    case '6':
      return '⁶'
    case '7':
      return '⁷'
    case '8':
      return '⁸'
    case '9':
      return '⁹'
    case '0':
      return '⁰'
    case '-':
      return '⁻'
    default:
      throw 'not-a-number'
  }
}
function number2superscript(n) {
  n = n.toString()
  x = ''
  for (let i = 0; i < n.length; i++) {
    x += replaceSuperscript(n[i])
  }
  return x
}
function replaceSubscript(n) {
  switch(n) {
    case '1':
      return '₁'
    case '2':
      return '₂'
    case '3':
      return '₃'
    case '4':
      return '₄'
    case '5':
      return '₅'
    case '6':
      return '₆'
    case '7':
      return '₇'
    case '8':
      return '₈'
    case '9':
      return '₉'
    case '0':
      return '₀'
    case '-':
      return '₋'
    default:
      throw 'not-a-number'
  }
}
function number2subscript(n) {
  n = n.toString()
  x = ''
  for (let i = 0; i < n.length; i++) {
    x += replaceSubscript(n[i])
  }
  return x
}


module.exports = {
  number2subscript,
  number2superscript
}