const myRemove = require('./arrRemove')

describe('Exercício 2', () => {
  it('Verifica se o retorno da função pasando os parametros [1, 2, 3, 4], 3 retorna [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Verifica se o retorno da função pasando os parametros [1, 2, 3, 4], 3 retorna [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  const mylist = [5, 6, 7, 8];
  myRemove(mylist, 5)
  it('Verifica se o array passado por parametro não sofreu alteração', () => {
    expect([5, 6, 7, 8]).toEqual(mylist);
  });

  it('Verifica se o retorno da função pasando os parametros [1, 2, 3, 4], 5 retorna [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});