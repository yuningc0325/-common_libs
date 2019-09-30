const typeCheck = require('./typeCheck')
const commonFunc = require('./libs/index')
const { isNumber, isString } = typeCheck
const { inRange, isEleInArray } = commonFunc
// 2019/02/02 ,2019-02-02 , 20190201 - > timestamp
// const stringToTimeStamp = (s = '') => {
//   return ''
// }

// const checkStringIsValid = (date = '') => {
//   // check if format is YYYYMMDD / YYYY-MM-DD / YYYY/MM/DD
//   const regEx = /[^0-9-/]/g
//   if (date.match(regEx)) return false
//   const splitString = date.split(regEx) // expected: ['YYYY/MM/DD'] || ['YYYY-MM-DD'] || ['YYYdYMMDD']
//   let splitYear
//   let splitMonth
//   let splitDay
//   if (splitString.length===1) {
//     const date = splitString[0]
//     cosnt isValod = checkStringCanBeSplitedBySymbol('/',date) && checkStringCanBeSplitedBySymbol('-',date) && checkStringCanBeSplitedBySymbol('null',date)
//   }
// }

// const checkStringCanBeSplitedBySymbol = (symbol = '', s = '') => {
//   let isValid = true
//   switch (symbol) {
//     case '/': {
//       if(s.includes(symbol)){
//         isValid =
//         const dateArray = s.split(symbol) // expected ['YYYY','MM','DD']
//         const validDate = dateArray[0].length
//       }
//       break
//     }
//     case '-': {
//       isValid = s.split(symbol).length === 3
//       break
//     }
//     case 'null': {
//       isValid = s.length === 8
//       break
//     }
//     default: {
//       isValid = true
//     }
//   }
//   return isValid
// }

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
  isLeapYear
}

module.exports = dateTool
