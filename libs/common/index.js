const typeCheck = require('../checkType')
/**
 * check the number is in range between (inclusive) statr and (inclusive) end
 * @param {number} number
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
const inRange = (number = 0, start = 0, end) => {
  const { isNumber } = typeCheck
  if (!end) {
    end = start
    start = 0
  }
  if (end < start ||
    !isNumber(number) ||
    !isNumber(start) ||
    !isNumber(end)) {
    throw new Error('the input is invalid')
  }
  const isInRange = number >= start && number <= end
  return isInRange
}

/**
 * @param {Array} arr
 * @param {*} ele
 */
const isEleInArray = (arr = [], ele) => {
  const { isArray } = typeCheck
  if (!isArray(arr) || ele === null || ele === undefined) throw Error('invalid input')
  let result = false
  let index = 0
  while (index < arr.length) {
    if (arr[index] === ele) {
      result = true
      break
    } else {
      index++
    }
  }
  return result
}

/**
 * move the element in an array forward or backward based on shift number (positive or negative)
 * if the next or previous index exceeds the array, then the next index will start from the first or from the end
 * for example, [0,1,2] move forward 1, will be [2,1,0]
 * @param {Array} arr
 * @param {numnber} shift
 * @return Array
 */
const circleShift = (arr = [], shift = 0) => {
  const { isNumber } = typeCheck
  const total = arr.length
  if (!inRange(shift, -total + 1, total - 1) || !isNumber(shift) || !isNumber(total)) { throw new Error('the input is invalid') }
  if (shift === 0 || total <= 1) return arr
  const result = Object.assign([], arr)
  if (shift > 0) {
    arr.forEach((el, i) => {
      const shiftIndex = (i + shift) % total
      result[shiftIndex] = el
    })
  } else {
    arr.forEach((el, i) => {
      const shiftIndex = (i + shift) < 0 ? total - Math.abs((i + shift)) : (i + shift)
      result[shiftIndex] = el
    })
  }
  return result
}

module.exports = {
  inRange,
  isEleInArray,
  circleShift
}
