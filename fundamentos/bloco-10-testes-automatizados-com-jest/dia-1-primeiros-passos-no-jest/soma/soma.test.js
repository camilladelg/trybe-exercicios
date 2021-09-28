const sum = require('./soma');

describe('Exercício 1', () => {
  it('Verifica se o retorno da função pasando os parametros 4 e 5 retorna 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Verifica se o retorno da função pasando os parametros 0 e 0 retorna 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Verifica se a função lança um erro quando algum dos parametros é uma string', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });

  it('Verifica se a função lança um erro quando algum dos parametros é uma string', () => {
    expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
  });
});