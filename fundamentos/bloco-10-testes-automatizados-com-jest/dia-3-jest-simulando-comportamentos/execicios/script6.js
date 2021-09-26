const fetch = require('node-fetch');

function fetchDog() {
  return fetch("https://dog.ceo/api/breeds/image/random")
  .then(response => response.json())
  .then(json => json)
  .catch((erro) => erro)
};

// fetchDog()
//  .then((resolve) => console.log(resolve))
//  .catch((erro) => console.log(erro));

module.exports = { fetchDog };

