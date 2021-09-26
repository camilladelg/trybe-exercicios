const aleatoryNum = () => {
  const num = Math.floor(Math.random() * 101);
  return num;
}


const upperCase = (string) => {
  return string.toUpperCase();
}

const fristWord = (string) => {
  const separeteString = string.split('');
  return separeteString[0];
}

const concatString = (a, b) => {
  const concat = `${a} ${b}`;
  return concat;
}

module.exports = { aleatoryNum, upperCase, fristWord, concatString };
