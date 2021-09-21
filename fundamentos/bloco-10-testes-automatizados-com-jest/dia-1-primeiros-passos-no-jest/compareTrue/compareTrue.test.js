const compareTrue = require('./compareTrue');

describe('Exercício 1', () => {
  it('Se for passado dois parametros retorna true', () => {
    expect(compareTrue(1, 2)).toBe(true);
  });

  it('Se for passado dois parametros retorna true', () => {
    expect(compareTrue(1)).not.toBe(true);
  });
});