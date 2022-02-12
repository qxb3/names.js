const { readFileSync } = require('fs')
const { join } = require('path')

const { randomNumber } = require('../lib/utils')

const animalNames = readFileSync(join(__dirname, '../../names/animals.txt'), 'utf-8').split('\n')

module.exports = (count) => {
  if (count === undefined) {
    count = 1
  }

  const names = []
  for (let i = 0; i < count; i++) {
    const name = animalNames[randomNumber(0, animalNames.length)]
    names.push(name)
  }

  return names
}
