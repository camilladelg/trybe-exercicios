const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
  // console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
}
testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (a, b) => {
  return a > b ? 1 : a < b ? -1 : 0;
}
console.log(oddsAndEvens.sort(sortOddsAndEvens));

const nFatorial = numero =>  {
  let fatorial = 1;
  for (let i = 1; i <= numero; i += 1) {
    fatorial = `${fatorial * i}`;
  }
  return fatorial;
}
console.log(nFatorial(3));

const longestWord = frase => {
  let arrayFrase = frase.split(' ');
  let maiorTamanho = 0;
  let result = '';
  for(let value of arrayFrase) {
    if(value.length > maiorTamanho) {
      maiorTamanho = value.length;
      result = value;
    }
  }
  return result;
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')) // retorna 'aconteceu'



let getContador = document.getElementById('contador');
let contador = 0;
  document.getElementById('botao').addEventListener('click', () => getContador.innerText = contador += 1); 

// function contar() {
//   let getContador = document.getElementById('contador');
//   let contador = 0;
//   getContador.innerText = contador += 1;
// }
// function botao() {
//   let getBotao = document.getElementById('botao');
//   getBotao.addEventListener('click', contar);
// }
// botao()





const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    );

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`);


    result = `
    ${result}

    #goTrybe
    `;

    return result;
}

console.log(buildSkillsPhrase("Lucas"));