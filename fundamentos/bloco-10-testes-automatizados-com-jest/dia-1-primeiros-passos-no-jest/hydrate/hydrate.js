const hydrate = (string) => {
  const arrString = string.split('');
  const result = arrString.reduce((acc, elemento) => {
    let parsedCharacter = parseInt(elemento);
    let checkCharacter = isNaN(parsedCharacter) === false;
    if (checkCharacter) { return acc + parsedCharacter };
    return acc;
  }, 0);
  const pluralGlass = result === 1 ? 'copo' : 'copos';
  return `${result} ${pluralGlass} de água`;
};

module.exports = hydrate;