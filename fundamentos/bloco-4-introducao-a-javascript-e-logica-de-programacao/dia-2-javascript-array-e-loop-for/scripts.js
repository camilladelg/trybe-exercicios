let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaArray = 0;

//1-Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
for(let indice = 0; indice < numbers.length; indice +=1){
    console.log(numbers[indice]);
}

//2-Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
//3-Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let mediaAritimeticaArray;

for(let indice = 0; indice < numbers.length; indice +=1){
    somaArray = somaArray + numbers[indice];
}

mediaAritimeticaArray = somaArray / numbers.length;
console.log(somaArray); //exercicio2
console.log(mediaAritimeticaArray); //exercicio3

//4-Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: 
//      "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if(mediaAritimeticaArray > 20){
    console.log("Valor maior que 20.");
}
else{
    console.log("Valor menos ou igual a 20.");
}

//5-Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maiorValorDaLista = Math.max(...numbers);
console.log(maiorValorDaLista);

//solução trybe
//let higherNumber = numbers[0];

//for (let index = 1; index < numbers.length; index += 1) {
//  if (numbers[index] > higherNumber) {
//    higherNumber = numbers[index];
//  }
//}
//console.log(higherNumber);

//6-Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let quantidadeDeNumerosImparesDaArray = 0;
let quantidadeDeNumerosParesDaArray = 0;

for(let indice = 0; indice < numbers.length; indice +=1){

    if (numbers[indice] % 2 !== 0){
        quantidadeDeNumerosImparesDaArray +=1;
        }
    else{
        quantidadeDeNumerosParesDaArray +=1

    }
}

if (quantidadeDeNumerosImparesDaArray > 0){
    console.log(quantidadeDeNumerosImparesDaArray);
}
else{
    console.log("Nenhum valor ímpar encontrado");
}

//7-Utilizando for , descubra qual o menor valor contido no array e imprima-o;
maiorValorDaLista = Math.min(...numbers);
console.log(maiorValorDaLista);
//codigotrybe
//let menorValorArray = numbers[0];

//for(let indice = 1; indice < numbers.length; indice +=1){
//    if(numbers[indice] < menorValorArray){
//        menorValorArray = numbers[indice]
//    }
//    else{
//        menorValorArray = menorValorArray;
//    }
//}
//console.log(menorValorArray);

//8-Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;


let minhaLista = [];

for(let indice = 25; indice >= 1; indice -=1){
    minhaLista.push(indice);

}
minhaLista.reverse();
console.log(minhaLista);



//codigotrybe
//let numbers = [];
//for (let index = 1; index <= 25; index += 1) {
//   numbers.push(index);
//  } 
//  console.log(numbers);


//9-Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let minhaLista2 = [];

for(let indice = 25; indice >= 1; indice -=1){
    minhaLista2.push(indice / 2);
}
console.log(minhaLista2);



//codigotrybe
//for (let index = 0; index < numbers.length; index += 1) {
//    console.log(numbers[index] / 2);
//};

//exercico bonus
//1-Ordene o array numbers em ordem crescente e imprima seus valores;
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (indice1 = 1; indice1 < numbers.length; indice1 +=1){
    for (indice0 = 0; indice0 < indice1; indice0 +=1){
        if(numbers[indice0] > numbers[indice1]){
            let posicao = numbers[indice0]; // variavel posição é o 1º item da lista
            numbers[indice0] = numbers[indice1]; //a 1º posição da lista se tornou agora a 2º posição
            numbers[indice1] = posicao; // a 2º posição da lista se tornou a 1º 
        }
    }
}
console.log(numbers); 



//2-rdene o array numbers em ordem decrescente e imprima seus valores;

for (indice1 = 1; indice1 < numbers.length; indice1 +=1){
    for (indice0 = 0; indice0 < indice1; indice0 +=1){
        if(numbers[indice0] < numbers[indice1]){
            let posicao = numbers[indice0]; // variavel posição é o 1º item da lista
            numbers[indice0] = numbers[indice1]; //a 1º posição da lista se tornou agora a 2º posição
            numbers[indice1] = posicao; // a 2º posição da lista se tornou a 1º 
        }
    }
}
console.log(numbers);

//3-Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado 
//pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do 
//novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá
// ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novaLista = [];

for(let indice = 0; indice < numbers.length; indice += 1){
    if(indice + 1 < numbers.length){
        novaLista.push(numbers[indice] * numbers[indice + 1]);
    }
    else {
        novaLista.push(numbers[indice] * 2);
    }
}

console.log(novaLista);