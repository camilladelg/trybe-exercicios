const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// 6. - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada 
// objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos 
// assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de 
// reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do 
// array dentro de map , e você pode ver o objeto esperado na constante expected.

// Resolução com o for
// let sum = 0;
// let media;
// let arrayMedia = [];
// let indices;
// for (let i = 0; i < grades.length; i += 1) {
//   indices = grades[i];
//   for(let i1 = 0; i1 < indices.length; i1 += 1) {
//     sum = sum + indices[i1];
//     media = sum / indices.length; 
//   }
//   arrayMedia.push(media)
//   sum = 0;
//   console.log(({nome: students[i],
//   average: arrayMedia[i]}));
// }

function studentAverage() {
  return students.map((elemento, index) => ({ 
    name: elemento, 
    average: grades[index].reduce((acumulador, elemento1) =>
      acumulador + elemento1) / grades[index].length
    }), 0);
};
console.log(studentAverage())

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];
assert.deepStrictEqual(studentAverage(), expected);