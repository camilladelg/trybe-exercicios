const data = require('./script');
jest.mock('./script');

describe('Exercicio 1', ( )=> {
  it("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
    data.aleatoryNum = jest.fn().mockReturnValue(10);

    expect(data.aleatoryNum()).toBe(10);
    expect(data.aleatoryNum).toHaveBeenCalled();
    expect(data.aleatoryNum).toHaveBeenCalledTimes(1);
  });
});

describe('Exercicio 2', () => {
  it('testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros', () => {
    data.aleatoryNum = jest.fn()
    .mockImplementationOnce((a, b) => a / b);

    expect(data.aleatoryNum(10, 2)).toBe(5);
    expect(data.aleatoryNum).toHaveBeenCalled();
    expect(data.aleatoryNum).toHaveBeenCalledTimes(1);
    expect(data.aleatoryNum).toHaveBeenCalledWith(10, 2);
  })
})

describe('Exercicio 3', () => {
  it('A nova implementação recebe 3 parâmetros e retorna sua multiplicação. Depois reseta a sua implementação e cria uma nova, que receba um parâmetro e retorne seu dobro.', () => {
    data.aleatoryNum = jest.fn()
    .mockImplementation((a, b, c) => a * b * c);

    expect(data.aleatoryNum(1, 2, 3)).toBe(6);
    expect(data.aleatoryNum).toHaveBeenCalled();
    expect(data.aleatoryNum).toHaveBeenCalledTimes(1);
    expect(data.aleatoryNum).toHaveBeenCalledWith(1, 2, 3);

    data.aleatoryNum.mockReset();
    data.aleatoryNum = jest.fn()
    .mockImplementation((num) => num * 2);

    expect(data.aleatoryNum(2)).toBe(4);
    expect(data.aleatoryNum).toHaveBeenCalled();
    expect(data.aleatoryNum).toHaveBeenCalledTimes(1);
    expect(data.aleatoryNum).toHaveBeenCalledWith(2);
  })
})

describe('Exercicios 4', () => {
  it('Faz uma nova implementação para a 1º função para retornar a string em caixa baixa', () => {
    data.upperCase.mockImplementation((string) => string.toLowerCase());

    expect(data.upperCase('OLÁ')).toBe('olá');
    expect(data.upperCase).toHaveBeenCalled();
    expect(data.upperCase).toHaveBeenCalledTimes(1);
    expect(data.upperCase).toHaveBeenCalledWith('OLÁ');

  });

  it('A nova implementação retorna a última letra de uma string', () => {
    data.fristWord.mockImplementation((string) => {
      const separeteString = string.split('');
      return separeteString[separeteString.length - 1];
    });

    expect(data.fristWord('Oi')).toBe('i');
    expect(data.fristWord).toHaveBeenCalled();
    expect(data.fristWord).toHaveBeenCalledTimes(1);
    expect(data.fristWord).toHaveBeenCalledWith('Oi');
  })

  it('Recebe 3 strings e as concatena', () => {
    data.concatString.mockImplementation((a, b, c) => `${a} ${b} ${c}`);

    expect(data.concatString('Camilla', 'Del', 'Guerso')).toBe('Camilla Del Guerso');
    expect(data.concatString).toHaveBeenCalled();
    expect(data.concatString).toHaveBeenCalledTimes(1);
    expect(data.concatString).toHaveBeenCalledWith('Camilla', 'Del', 'Guerso');
  })  
})