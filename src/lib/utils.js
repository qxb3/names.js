const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const ignoreCase = (str1, str2) => {
  return str1.toLowerCase() === str2.toLowerCase()
}

module.exports = {
  randomNumber,
  ignoreCase
}
