const typeCheck = require('../libs/checkType')

module.exports = () => {
  test('check if 10 is a number', () => {
    expect(typeCheck.isNumber(10)).toBeTruthy()
  })
  test('check if "10" is a number', () => {
    expect(typeCheck.isNumber('10')).not.toBeTruthy()
  })
  test('check if undefined is a number', () => {
    expect(typeCheck.isNumber()).not.toBeTruthy()
  })
  test('check if null is a number', () => {
    expect(typeCheck.isNumber(null)).not.toBeTruthy()
  })
  test('check if "10" is a string', () => {
    expect(typeCheck.isString('10')).toBeTruthy()
  })
  test('check if 10 is a string', () => {
    expect(typeCheck.isString(10)).not.toBeTruthy()
  })
  test('check if undefined is a string', () => {
    expect(typeCheck.isString()).not.toBeTruthy()
  })
  test('check if null is a string', () => {
    expect(typeCheck.isString(null)).not.toBeTruthy()
  })
  test('check if Date is a date', () => {
    const date = new Date()
    expect(typeCheck.isDate(date)).toBeTruthy()
  })
  test('check if undefined is a date', () => {
    expect(typeCheck.isDate()).not.toBeTruthy()
  })
  test('check if null is a date', () => {
    expect(typeCheck.isDate(null)).not.toBeTruthy()
  })
  test('check if Array is an array', () => {
    const arr = new Array(0)
    expect(typeCheck.isArray(arr)).toBeTruthy()
  })
  test('check if [] is an array', () => {
    expect(typeCheck.isArray([])).toBeTruthy()
  })
  test('check if "" is an array', () => {
    expect(typeCheck.isArray('')).not.toBeTruthy()
  })
  test('check if undefined is an array', () => {
    expect(typeCheck.isArray()).not.toBeTruthy()
  })
  test('check if null is an array', () => {
    expect(typeCheck.isArray(null)).not.toBeTruthy()
  })
  test('check if Object is an object', () => {
    // eslint-disable-next-line no-new-object
    const object = new Object()
    expect(typeCheck.isObject(object)).toBeTruthy()
  })
  test('check if {} is an object', () => {
    const object = {}
    expect(typeCheck.isObject(object)).toBeTruthy()
  })
  test('check if [] is an object', () => {
    const object = []
    expect(typeCheck.isObject(object)).toBeTruthy()
  })
  test('check if Array is an object', () => {
    const object = new Array(0)
    expect(typeCheck.isObject(object)).toBeTruthy()
  })
  test('check if Date is an object', () => {
    const date = new Date()
    expect(typeCheck.isObject(date)).toBeTruthy()
  })
  test('check if String is an object', () => {
    // eslint-disable-next-line no-new-wrappers
    const string = new String()
    expect(typeCheck.isObject(string)).toBeTruthy()
  })
  test('check if undefined is an object', () => {
    expect(typeCheck.isObject()).not.toBeTruthy()
  })
  test('check if null is an object', () => {
    expect(typeCheck.isObject(null)).not.toBeTruthy()
  })
  test('check if {} is not an empty object', () => {
    const object = {}
    expect(typeCheck.isObjectNotEmpty(object)).not.toBeTruthy()
  })
  test('check if {a:1,b:2} is not an empty object', () => {
    const object = { a: 1, b: 2 }
    expect(typeCheck.isObjectNotEmpty(object)).toBeTruthy()
  })
  test('check if [] is not an empty object', () => {
    const object = []
    expect(typeCheck.isObjectNotEmpty(object)).toBeTruthy()
  })
  test('check if string is not an empty object', () => {
    expect(typeCheck.isObjectNotEmpty('string')).not.toBeTruthy()
  })
  test('check if number is not an empty object', () => {
    expect(typeCheck.isObjectNotEmpty(10)).not.toBeTruthy()
  })
  test('check if undefined is not an empty object', () => {
    expect(() => { typeCheck.isObjectNotEmpty() }).toThrow(Error)
  })
  test('check if null is not an empty object', () => {
    expect(() => { typeCheck.isObjectNotEmpty(null) }).toThrow(Error)
  })
}
