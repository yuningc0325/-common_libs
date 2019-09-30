const typeCheck = require('../typeCheck')
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

module.exports = {
  inRange
}
