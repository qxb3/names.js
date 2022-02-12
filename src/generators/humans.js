const { readFileSync } = require('fs')
const { join } = require('path')

const { randomNumber, ignoreCase } = require('../lib/utils')

const maleNames = readFileSync(join(__dirname, '../../names/humans/male.txt'), 'utf-8').split('\n')
const femaleNames = readFileSync(join(__dirname, '../../names/humans/male.txt'), 'utf-8').split('\n')
const surnames = readFileSync(join(__dirname, '../../names/humans/male.txt'), 'utf-8').split('\n')

module.exports = (gender, count) => {
  if (!ignoreCase(gender, 'male') && !ignoreCase(gender, 'female')) {
    throw new Error(`INVALID_TYPE ${gender} is not a valid gender`)
  }

  if (count === undefined) {
    count = 1
  }

  const names = []
  for (let i = 0; i < count; i++) {
    const name = ignoreCase(gender, 'male') ? maleNames[randomNumber(0, maleNames.length)] : femaleNames[randomNumber(0, femaleNames.length)]
    const surname = surnames[randomNumber(0, surnames.length)]

    names.push(`${name} ${surname}`)
  }

  return names
}
