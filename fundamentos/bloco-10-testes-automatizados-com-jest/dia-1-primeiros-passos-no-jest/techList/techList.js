function techList(arrayTech, name) {
  let objTechs;
  let pushArray = [];

  if (arrayTech.length < 1) {
    return 'Vazio!';
  }
  arrayTech.sort();
  arrayTech.forEach((elemento) => {
    const tech = elemento
    objTechs = {tech, name};
    pushArray.push(objTechs);
  });
  return pushArray;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

module.exports = techList;
