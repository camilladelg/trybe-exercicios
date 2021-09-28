const decode = require('./decode');

describe('Exercicio 8', () => {
  it('Verifica de se é uma função', () => {
    expect('function').toBe(typeof decode);
  })

  it('Verifica de se a vogal "a" foi codificada', () => {
    expect(decode('1n1')).toBe('ana');
  })

  it('Verifica de se a vogal "e" foi codificada', () => {
    expect(decode('2l2')).toBe('ele');
  })

  it('Verifica de se a vogal "i" foi codificada', () => {
    expect(decode('r3r')).toBe('rir');
  })

  it('Verifica de se a vogal "o" foi codificada', () => {
    expect(decode('4lá')).toBe('olá');
  })

  it('Verifica de se a vogal "u" foi codificada', () => {
    expect(decode('5m')).toBe('um');
  })

  it('Verifica de se a string retornada na função tem o mesmo tamanho da original', () => {
    expect(decode('5m').length).toBe(2);
  })
})