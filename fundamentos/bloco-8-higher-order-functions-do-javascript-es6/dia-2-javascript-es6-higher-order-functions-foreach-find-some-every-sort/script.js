const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// function authorBornIn1947(arr) {
//       if (arr.author.birthYear === 1947) {
//       return arr.author.name;
//     };
// }
// books.find(authorBornIn1947);

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// Dica: use a função find .

function authorBornIn1947() {
  return books.find((elemento) => elemento.author.birthYear === 1947).author.name;
}

assert.strictEqual(authorBornIn1947(), 'Stephen King');


// 2 - Retorne o nome do livro de menor nome.
// Dica: use a função forEach .

function smallerName() {
  let nameBook;
  // console.log(nameBook);
  books.forEach(elemento => {
    if (nameBook === undefined || elemento.name.length < nameBook.length) {
      nameBook = elemento.name;
    };
  })
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
smallerName()
assert.strictEqual(smallerName(), 'Duna');

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  const livro = books.find(elemento => elemento.name.length === 26)
  return livro;
}
getNamedBook()
assert.deepStrictEqual(getNamedBook(), expectedResult);

// 4 - Ordene os livros por data de lançamento em ordem decrescente.

const expectedResult1 = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  books.sort((elemento1, elemento2) => elemento2.releaseYear - elemento1.releaseYear);
  return books;
}
booksOrderedByReleaseYearDesc()
assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult1);

// 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

const expectedResult2 = false;

function everyoneWasBornOnSecXX() {
  return books.every(elemento => elemento.author.birthYear >= 1901 && elemento.author.birthYear <= 2000);
}
everyoneWasBornOnSecXX()
assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult2);

// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.
const expectedResult3 = true;

function someBookWasReleaseOnThe80s() {
  return books.some(elemento => elemento.releaseYear >= 1980 && elemento.releaseYear <= 1989);
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult3);

// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

const expectedResult4 = false;

function authorUnique() {
  return books.every((book) => 
  books.every((bookSome) =>
    (bookSome.author.birthYear === book.author.birthYear) 
     && (bookSome.author.name !== book.author.name)));

}
console.log(authorUnique());
assert.strictEqual(authorUnique(), expectedResult4);