const { inRange } = require('../libs/index')

module.exports = () => {
  test('5 in range of 1 to 6', () => {
    expect(inRange(5, 1, 5)).toBeTruthy()
  })

  test('5 is not in range of 1 to 2', () => {
    expect(inRange(5, 1, 2)).not.toBeTruthy()
  })

  test('5 is in range of 5 to 5', () => {
    expect(inRange(5, 5, 5)).toBeTruthy()
  })

  test('without end parameter', () => {
    expect(inRange(5, 8)).toBeTruthy()
  })

  test('end greater than start', () => {
    expect(() => { inRange(5, 3, 1) }).toThrow(Error)
  })

  test('the parameters are not number', () => {
    expect(() => { inRange('5', '1', '6') }).toThrow(Error)
  })
}
