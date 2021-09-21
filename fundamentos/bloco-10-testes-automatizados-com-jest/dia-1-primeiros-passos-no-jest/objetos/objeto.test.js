const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('Exercicio 5', () => {
  test('Verifica se os objetos são iguais', () => {
    expect(obj1).toEqual(obj2);
  });

  test('Verifica se os objetos são iguais', () => {
    expect(obj1).not.toEqual(obj3);
  });

test('Verifica se os objetos são iguais', () => {
    expect(obj2).not.toEqual(obj3);
});
})