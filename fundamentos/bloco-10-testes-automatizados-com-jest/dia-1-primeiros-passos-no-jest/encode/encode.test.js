const encode = require('./encode');

describe('Exercicio 7', () => {
  it('Verifica de se é uma função', () => {
    expect('function').toBe(typeof encode);
  })

  it('Verifica de se a vogal "a" foi codificada', () => {
    expect(encode('ana')).toBe('1n1');
  })

  it('Verifica de se a vogal "e" foi codificada', () => {
    expect(encode('ele')).toBe('2l2');
  })

  it('Verifica de se a vogal "i" foi codificada', () => {
    expect(encode('rir')).toBe('r3r');
  })

  it('Verifica de se a vogal "o" foi codificada', () => {
    expect(encode('olá')).toBe('4lá');
  })

  it('Verifica de se a vogal "u" foi codificada', () => {
    expect(encode('um')).toBe('5m');
  })

  it('Verifica de se a string retornada na função tem o mesmo tamanho da original', () => {
    expect(encode('um').length).toBe(2);
  })
  
})