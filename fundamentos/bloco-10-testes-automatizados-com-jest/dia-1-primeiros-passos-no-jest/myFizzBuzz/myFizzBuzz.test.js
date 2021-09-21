const myFizzBuzz = require('./myFizzBuzz');

describe('Exercício 4', () => {

    it('Retorna "fizzbuzz" se o múmero passado por parâmetro for divisível por 3 e 5', () => {
      expect(myFizzBuzz(15)).toBe('fizzbuzz')
    });

    it('Retorna "fizz" se o múmero passado por parâmetro for divisível apenas por 3', () => {
      expect(myFizzBuzz(9)).toBe('fizz')
    });

    it('Retorna "buzz" se o múmero passado por parâmetro for divisível apenas por 5', () => {
      expect(myFizzBuzz(10)).toBe('buzz')
    });

    it('Retorna o proprio parâmetro caso ele não seja divisível por 3 ou por 5', () => {
      expect(myFizzBuzz(7)).toBe(7)
    });

    it('Se o parametro é diferente de "number" retorna "false"', () => {
      expect(myFizzBuzz('5')).toBe(false)
    });
});