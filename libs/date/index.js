const typeCheck = require('../checkType')
const commonFunc = require('../common')
const { isNumber, isString } = typeCheck
const { inRange, isEleInArray } = commonFunc

/**
 * check if date range string is a valid string, valid string format can be
 * YYYY-MM-DD~YYYY-MM-DD, YYYY/MM/DD~YYYY/MM/DD, YYYYMMDD~YYYYMMDD
 * @param {String} date
 * @return {boolean}
 */
const checkDateRangeStringIsValid = (date = '') => {
  if (!isString(date)) throw new Error('input not valid')
  const arr = date.split('~')
  if (arr.length !== 2) return false
  return checkDateStringIsValid(arr[0]) && checkDateStringIsValid(arr[1])
}

/**
 * check if date string is a valid string, valid string format can be
 * YYYY-MM-DD YYYYMMDD YYYY/MM/DD
 * @param {string} s
 * @return {boolean}
 */
const checkDateStringIsValid = (s = '') => {
  if (!isString(s)) throw new Error('input not valid')
  const regEx = {
    withoutOutlier: /[^0-9/-]/g,
    withDash: /[[-]/g,
    withSlash: /[/]/g
  }
  if (s.match(regEx.withoutOutlier) !== null) return false
  const numOfDash = s.match(regEx.withDash) ? s.match(regEx.withDash).length : 0
  const numOfSlash = s.match(regEx.withSlash) ? s.match(regEx.withSlash).length : 0
  if ((numOfDash === 2 && numOfDash + numOfSlash === 2) ||
  (numOfSlash === 2 && numOfSlash + numOfDash === 2) ||
  (numOfSlash + numOfDash === 0 && s.length === 8)) {
    const symbol = s.includes('/') ? '/' : s.includes('-') ? '-' : null
    switch (symbol) {
      case '/':
      case '-': {
        const arr = s.split(symbol)
        const isValid = checkYearMonthDayFormatIsValid(arr[0], arr[1], arr[2]) && arr.length === 3
        return isValid
      }
      case null: {
        const year = s.slice(0, 4)
        const month = s.slice(4, 6)
        const day = s.slice(6, 8)
        const isValid = checkYearMonthDayFormatIsValid(year, month, day)
        return isValid
      }
    }
  } else {
    return false
  }
}

/**
 * check if year, month, day value is valid
 * @param {string} year
 * @param {string} month
 * @param {string} day
 * @return {boolean}
 */
const checkYearMonthDayFormatIsValid = (year = '', month = '', day = '') => {
  if (!isString(year) || !isString(month) || !isString(day)) throw Error('invalid input')
  const dayRange = { min: 1, max: 31 }
  const currentYear = parseInt(year, 10)
  const currentDay = parseInt(day, 10)
  const currentMonth = parseInt(month, 10)
  const leapYear = isLeapYear(year)
  dayRange.max = isEleInArray([1, 3, 5, 7, 8, 10, 12], currentMonth) ? 31
    : isEleInArray([4, 6, 9, 11], currentMonth) ? 30
      : (currentMonth === 2 && leapYear) ? 29
        : (currentMonth === 2 && !leapYear) ? 28
          : 31
  const yearValid = year.length === 4 && inRange(currentYear, 100, 3000)
  const monthValid = month.length === 2 && inRange(currentMonth, 1, 12)
  const dayValid = day.length === 2 && inRange(currentDay, dayRange.min, dayRange.max)
  return yearValid && monthValid && dayValid
}

/**
 * check if year is leap year
 * @param {string} year
 * @return {boolean}
 */
const isLeapYear = (year = '') => {
  if (!isString(year) && !isNumber(year)) throw Error('invalid input')
  const y = parseInt(year, 10)
  return ((y % 4 === 0) && (y % 100 !== 0)) || (y % 400 === 0)
}

const dateTool = {
  checkYearMonthDayFormatIsValid,
  isLeapYear,
  checkDateStringIsValid,
  checkDateRangeStringIsValid
}

module.exports = dateTool
