function encode(frase1) {
  let listaFrase1 = frase1.split('');
  for (let i in listaFrase1) {
    if (listaFrase1[i] === 'a') {
      listaFrase1[i] = '1';
    } else if (listaFrase1[i] === 'e') {
      listaFrase1[i] = '2';
    } else if (listaFrase1[i] === 'i') {
      listaFrase1[i] = '3';
    } else if (listaFrase1[i] === 'o') {
      listaFrase1[i] = '4';
    } else if (listaFrase1[i] === 'u') {
      listaFrase1[i] = '5';
    }
  }
  return listaFrase1.join('');
}

module.exports = encode;