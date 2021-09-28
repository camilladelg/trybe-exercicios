const data = require('./script6');
const fetch = require('node-fetch')
jest.mock('node-fetch');

const objOK= {
  message: 'https://images.dog.ceo/breeds/kelpie/n02105412_1952.jpg',
  status: 'success'
};

const objError = {
  status: 'error',
  message: 'No route found for "GET /api/breeds/image/random1" with code: 0',
  code: 404
};

describe('Exercicio 6', () => {
  it('testando requisição caso a promisse resolva', async () => {

    expect.assertions(1);
    fetch.mockImplementation( async () => {
      return {
        json: async () => {
          return objOK;
        }
      }
    })

    const resp = await data.fetchDog();

    expect(resp).toEqual(objOK)
  })

  it('testando requisição caso a promisse não resolva', async () => {

    expect.assertions(1);
    fetch.mockImplementation( async () => {
      return {
        json: async () => {
          return objError;
        }
      }
    })

    const resp = await data.fetchDog();

    expect(resp).toEqual(objError)
  })
})