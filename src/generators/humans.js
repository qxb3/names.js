const { readFileSync } = require('fs')
const { join } = require('path')

const { randomNumber, ignoreCase } = require('../lib/utils')

const genderNames = {
  male: readFileSync(join(__dirname, '../../names/humans/male.txt'), 'utf-8').split('\n'),
  female: readFileSync(join(__dirname, '../../names/humans/male.txt'), 'utf-8').split('\n')
}
const surnames = readFileSync(join(__dirname, '../../names/humans/male.txt'), 'utf-8').split('\n')
const genders = ['male', 'female']

module.exports = (gender, count) => {
  if (!gender) {
    throw new Error('gender is required')
  }

  if (typeof gender !== 'string') {
    throw new TypeError('gender needs to be typeof string')
  }

  if (!genders.includes(gender.toLowerCase()) && !ignoreCase(gender, 'any')) {
    throw new TypeError(`${gender} is not a valid gender`)
  }

  if (count === undefined) {
    count = 1
  }

  const names = []
  for (let i = 0; i < count; i++) {
    const any = genderNames[genders[randomNumber(0, genders.length-1)]]
    const name = ignoreCase(gender, 'any') ? any[randomNumber(0, any.length)] : genderNames[gender][randomNumber(0, genderNames[gender].length)]
    const surname = surnames[randomNumber(0, surnames.length)]

    names.push(`${name} ${surname}`)
  }

  return names
}
