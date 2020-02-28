const dateTool = require('../libs/date')
const {
  isLeapYear,
  checkYearMonthDayFormatIsValid,
  checkDateStringIsValid,
  checkDateRangeStringIsValid
} = dateTool

module.exports = () => {
  isLeapYearTest()
  checkYearMonthDayFormatIsValidTest()
  checkDateStringIsValidTest()
  checkDateRangeStringIsValidTest()
}

const isLeapYearTest = () => {
  test('check if 2000 is leap year', () => {
    expect(isLeapYear('2000')).toBeTruthy()
  })
  test('check if 2016 is leap year', () => {
    expect(isLeapYear('2016')).toBeTruthy()
  })
  test('check if 2019 is leap year', () => {
    expect(isLeapYear('2019')).not.toBeTruthy()
  })
}

const checkYearMonthDayFormatIsValidTest = () => {
  test('check if 2019 09 31 is valid', () => {
    expect(checkYearMonthDayFormatIsValid('2019', '09', '31')).not.toBeTruthy()
  })
  test('check if 2019 02 28 is valid', () => {
    expect(checkYearMonthDayFormatIsValid('2019', '02', '28')).toBeTruthy()
  })
  test('check if 2019 02 28 is valid', () => {
    expect(checkYearMonthDayFormatIsValid('2019', '02', '28')).toBeTruthy()
  })
  test('check if 2016 02 29 is valid', () => {
    expect(checkYearMonthDayFormatIsValid('2016', '02', '29')).toBeTruthy()
  })
  test('check if 2017 02 29 is valid', () => {
    expect(checkYearMonthDayFormatIsValid('2017', '02', '29')).not.toBeTruthy()
  })
  test('check if 0000 01 01 is valid', () => {
    expect(checkYearMonthDayFormatIsValid('0000', '01', '01')).not.toBeTruthy()
  })
  test('check if 1990 13 01 is valid', () => {
    expect(checkYearMonthDayFormatIsValid('1990', '13', '01')).not.toBeTruthy()
  })
  test('check if 1990 12 32 is valid', () => {
    expect(checkYearMonthDayFormatIsValid('1990', '12', '32')).not.toBeTruthy()
  })
}

const checkDateStringIsValidTest = () => {
  test('check if 2019/01/01 is valid', () => {
    expect(checkDateStringIsValid('2019/01/01')).toBeTruthy()
  })
  test('check if 2019/02/29 is valid', () => {
    expect(checkDateStringIsValid('2019/02/29')).not.toBeTruthy()
  })
  test('check if 2019/31/29 is valid', () => {
    expect(checkDateStringIsValid('2019/13/01')).not.toBeTruthy()
  })
  test('check if 2019-01-01 is valid', () => {
    expect(checkDateStringIsValid('2019-01-01')).toBeTruthy()
  })
  test('check if 20190101 is valid', () => {
    expect(checkDateStringIsValid('20190101')).toBeTruthy()
  })
  test('check if 2019~01~01 is valid', () => {
    expect(checkDateStringIsValid('2019~01~01')).not.toBeTruthy()
  })
  test('check if 二零一九 is valid', () => {
    expect(checkDateStringIsValid('二零一九')).not.toBeTruthy()
  })
  test('check if 2019 is valid', () => {
    expect(checkDateStringIsValid('2019')).not.toBeTruthy()
  })
  test('check if 20/01/2019 is valid', () => {
    expect(checkDateStringIsValid('20/01/2019')).not.toBeTruthy()
  })
  test('check if number 20190101 is valid', () => {
    expect(() => { checkDateStringIsValid(20190101) }).toThrow(Error)
  })
}

const checkDateRangeStringIsValidTest = () => {
  test('check if 2019/01/01~2019/01/02 is valid', () => {
    expect(checkDateRangeStringIsValid('2019/01/01~2019/01/02')).toBeTruthy()
  })
  test('check if 2019/01/01-2019/01/02 is valid', () => {
    expect(checkDateRangeStringIsValid('2019/01/01-2019/01/02')).not.toBeTruthy()
  })
  test('check if 2019/01/01~2019/01/02~2019/02/01 is valid', () => {
    expect(checkDateRangeStringIsValid('2019/01/01-2019/01/02~2019/02/01')).not.toBeTruthy()
  })
  test('check if 12345678~12345678 is valid', () => {
    expect(checkDateRangeStringIsValid('12345678~12345678')).not.toBeTruthy()
  })
}
