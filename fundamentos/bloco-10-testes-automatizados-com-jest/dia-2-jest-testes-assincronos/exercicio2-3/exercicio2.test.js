const getUserName = require('./exercicio2')

describe('Exercicio 2 - Quando o Id é válido', () => {
  it('Se o id passado por parâmetro for válido retorna o nome do usuário', () => {
    expect.assertions(1);
    return getUserName(1).then((result) => {
      expect(result).toEqual('Mark');
    })
  })
})

describe('Exercicio 2 - Quando o Id é inválido', () => {
  it('Se o id passado por parâmetro for inválido retorna a mensagem de erro', () => {
    expect.assertions(1);
    return getUserName(0).catch((error) => {
      expect(error.message).toMatch('User with 0 not found.');
    })
  })
})