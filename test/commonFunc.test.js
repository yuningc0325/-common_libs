const { inRange, isEleInArray, circleShift } = require('../libs/common')

module.exports = () => {
  inRangeTest()
  isEleInArrayTest()
  circleShiftTest()
}

const inRangeTest = () => {
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

const isEleInArrayTest = () => {
  test('check if 5 in [1,3,4,5]', () => {
    expect(isEleInArray([1, 3, 4, 5], 5)).toBeTruthy()
  })
  test('check if 0 in [1,3,4,5]', () => {
    expect(isEleInArray([1, 3, 4, 5], 0)).not.toBeTruthy()
  })
  test('check if "3" in [1,3,4,5]', () => {
    expect(isEleInArray([1, 3, 4, 5], '3')).not.toBeTruthy()
  })
  test('check if undefined in [1,3,4,5]', () => {
    expect(() => { isEleInArray([1, 3, 4, 5]) }).toThrow(Error)
  })
}

const circleShiftTest = () => {
  test('check if [0,1,2,3] with offset 1', () => {
    expect(circleShift([0, 1, 2, 3], 1)).toStrictEqual([3, 0, 1, 2])
  })
  test('check if [0,1,2,3] with offset -1', () => {
    expect(circleShift([0, 1, 2, 3], -1)).toStrictEqual([1, 2, 3, 0])
  })
}
