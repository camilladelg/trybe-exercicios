//4- Depois, faça uma pirâmide com n asteriscos de base:
let n = 5;
let simbolo = '*';
let linha = '';

let meioDaMatriz = (n + 1) / 2;
let paraEsquerda = meioDaMatriz;
let paraDireita = meioDaMatriz;

for (let indexLinha = 0; indexLinha <= meioDaMatriz; indexLinha += 1) {
  for (let indexColuna = 0; indexColuna <= n; indexColuna += 1) {
    if (indexColuna > paraEsquerda && indexColuna < paraDireita) {
      linha = linha + simbolo;
    } else {
      linha = linha + ' ';
    }

  }
  console.log(linha);
  linha = '';
  paraDireita += 1;
  paraEsquerda -= 1
};