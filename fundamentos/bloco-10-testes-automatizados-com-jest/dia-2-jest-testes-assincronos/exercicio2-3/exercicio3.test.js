const getUserName = require('./exercicio2')
// const users = [
//   { id: 1, name: 'Mark' },
//   { id: 2, name: 'Paul' },
// ];

describe('Exercicio 3 - Se o id for válido', () => {
  it('Retorna o nome do animal', async () => {
    const name = await getUserName(2);
    expect(name).toEqual('Paul')
  })
})

describe('Exercicio 3 - Se o id for inválido', () => {
  it('Retora uma mensagem de erro', async () => {
    try{
      await getUserName(4);
    } catch(error) {
      expect(error).toEqual(new Error('User with 4 not found.'))
    }
  })
})