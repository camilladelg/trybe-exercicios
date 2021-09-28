const uppercase = require('./exercicio1');

describe ('Exercicio 1', () => {
  it('Verifica se a função transforma as letras minusculas da string passada por parametro em maiusculas', (done) => {
    uppercase('camilla', (callback) => {
      try {
        expect(callback).toBe('CAMILLA');
        done();
      } catch (error) {
        done(error);
      }
    })
  })
})