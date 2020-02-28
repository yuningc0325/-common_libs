
const isNumber = (number) => {
  const isValid = typeof number === 'number' || number instanceof Number
  return isValid
}

const isString = (string) => {
  const isValid = typeof string === 'string' || string instanceof String
  return isValid
}

const isDate = (date) => {
  const isValid = date instanceof Date
  return isValid
}

const isArray = (array) => {
  const isValid = array instanceof Array
  return isValid
}
// precondition: the input should not be null
const isObject = (object) => {
  const isValid = object !== null && typeof object === 'object'
  return isValid
}
// precondition: the input should be an object
const isObjectNotEmpty = (object) => {
  if (object === undefined || object === null) throw Error('input not applicable')
  const isValid = isObject(object) && Object.getOwnPropertyNames(object).length
  return isValid
}

const typeCheck = {
  isNumber,
  isString,
  isDate,
  isArray,
  isObject,
  isObjectNotEmpty
}

module.exports = typeCheck
