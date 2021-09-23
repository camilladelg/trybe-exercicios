const getRepos = require('./exercicio4');

describe('Exercicio 4', () => {
  it('Verifica se dois nomes de repositórios se encontram no array retornado', async () => {
    const arrNames = ['sd-01-week4-5-project-todo-list', 'sd-01-week4-5-project-meme-generator'];
    const url = 'https://api.github.com/orgs/tryber/repos';
    await expect(getRepos(url)).resolves.toContain('sd-01-week4-5-project-todo-list');
    await expect(getRepos(url)).resolves.toContain('sd-01-week4-5-project-meme-generator')
  })
})

// toContainEqual
// toContain 
// toHaveLength 