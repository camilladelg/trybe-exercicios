const assert = require('assert');

const greetPeople = (people) => {
    const greeting = 'Hello';
    let arrayGreetin = []
  
    for (let person in people) {
      arrayGreetin.push(`${greeting} ${people[person]}`)
    }
    return arrayGreetin;
  };
  
const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

greetPeople(parameter);

assert.strictEqual(typeof greetPeople, 'function');
assert.deepStrictEqual(greetPeople(parameter), result);