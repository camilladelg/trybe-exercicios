//3- Agora inverta o lado do triângulo. Por exemplo:
//Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. 
//Você precisará de uma lógica para imprimir espaços também.

let n = 3;
let simbolo = '*';
let linha = '';
let posicao = n;

for (let indexLinha = 0; indexLinha < n; indexLinha += 1) {
  for (let indexColuna = 0; indexColuna <= n; indexColuna += 1) {
    if (indexColuna < posicao) {
      linha = linha + ' ';
    } else {
      linha = linha + simbolo;
    }
  }
  console.log(linha);
  linha = '';
  posicao -= 1;
}