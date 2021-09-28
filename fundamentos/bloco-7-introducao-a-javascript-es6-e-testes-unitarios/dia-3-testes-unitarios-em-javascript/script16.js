const assert = require('assert');
// escreva a função removeMiddle aqui
const removeMiddle = (arr) => {
    
    const metade = Math.floor(arr.length/2);
    const meio = arr.splice(metade, 1)
    return meio;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);
// console.log(removeMiddle(words));

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);