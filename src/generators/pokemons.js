const { readFileSync } = require('fs')
const { join } = require('path')

const { randomNumber } = require('../lib/utils')

const pokemonNames = readFileSync(join(__dirname, '../../names/pokemons.txt'), 'utf-8').split('\n')

module.exports = (count) => {
  if (count === undefined) {
    count = 1
  }

  const names = []
  for (let i = 0; i < count; i++) {
    const name = pokemonNames[randomNumber(0, pokemonNames.length)]
    names.push(name)
  }

  return names
}
