const slugify = require('slugify');

const stringToSlug = (str) => slugify(str);

const sortAscArray = (array) => array.sort();

const upperFirstLetterWord = (str) => {
  str = str.split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }

  return str;
}

const getRandomValue = (array) => array[Math.floor(Math.random() * array.length)];

module.exports = {
  getRandomValue,
  sortAscArray,
  stringToSlug,
  upperFirstLetterWord
}

console.log('stringToSlug', stringToSlug('coucou comment ça va ?'));
console.log('sortAscArray', sortAscArray(['coucou', 'toto', 'abcd', 'titi']));
console.log('upperFirstLetterWord', upperFirstLetterWord('coucou comment ça va ?'));
console.log('getRandomValue', getRandomValue(['coucou', 'toto', 'abcd', 'titi']));