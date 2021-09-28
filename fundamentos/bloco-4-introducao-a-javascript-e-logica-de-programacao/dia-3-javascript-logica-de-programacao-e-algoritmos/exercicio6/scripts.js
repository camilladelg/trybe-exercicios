//6- Faça um programa que diz se um número definido numa variável é primo ou não.
//   Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
//   Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os 
//   resultados em algum lugar.
//      codigotrybe
//          let divisors = 1;
//          let numberToCheck = 31;

//          for (let number = 2; number <= numberToCheck; number += 1) {
//            if (numberToCheck % number === 0) divisors += 1;
//          }

//          if (divisors === 2) console.log(numberToCheck + ' é primo');
//          else console.log(numberToCheck + ' não é primo');



let numeroPrimo = 6;
let listaPrimo =[];

for(let index = 1; index <= numeroPrimo; index += 1){
    let resultado =  numeroPrimo % index;
    if(resultado === 0){
        listaPrimo.push(resultado);
    }            
}

console.log(listaPrimo);
if (listaPrimo.length === 2){
    console.log("O número informado é um número primo.");    
}
else{
    console.log("O número informado não é um número primo.");
}