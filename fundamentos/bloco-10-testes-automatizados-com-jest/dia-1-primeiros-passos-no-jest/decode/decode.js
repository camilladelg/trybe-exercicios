function decode(frase1) {
  let listaFrase1 = frase1.split('');
  for (let i in listaFrase1) {
    if (listaFrase1[i] === '1') {
      listaFrase1[i] = 'a';
    } else if (listaFrase1[i] === '2') {
      listaFrase1[i] = 'e';
    } else if (listaFrase1[i] === '3') {
      listaFrase1[i] = 'i';
    } else if (listaFrase1[i] === '4') {
      listaFrase1[i] = 'o';
    } else if (listaFrase1[i] === '5') {
      listaFrase1[i] = 'u';
    }
  }
  return listaFrase1.join('');
}

module.exports = decode;