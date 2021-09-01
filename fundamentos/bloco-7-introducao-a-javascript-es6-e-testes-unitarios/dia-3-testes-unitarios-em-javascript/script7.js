const assert = require('assert');

// escreva a função wordLengths aqui
function wordLengths(arr) {
    let tamanhoArray = [];
    for (let i = 0; i < arr.length; i += 1) {
        tamanhoArray.push(arr[i].length);
    }
    return tamanhoArray;
}
wordLengths(['sun', 'potato', 'roundabout', 'pizza']);

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);