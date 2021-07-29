/*let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log(adicao);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo); */

/*
if (a>b){
    console.log(a);
}
else{
    console.log(b);
}*/

/*
if (a > b && a > c) {
    console.log(a)
}

else if( b > a && a > c){
    console.log(b);
}
else{
    console.log(c)
} */

/*
if (number < 0) {
    console.log ("negative")
}
else if (number > 0) {
    console.log("positive");    
}
else{
    console.log("zero");
}*/

/*
let somaDosAngulos = angulo1 + angulo2 + angulo3;
let angulospositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if(angulospositivos) {
    if (somaDosAngulos === 180){
        console.log(true);
    }
    else{
        console.log(false);
    };
}else {
    console.log("Erro")
}*/
let a = 5;
let b = 10;
let c = 2;
let number = 30; 
let angulo1 = 60;
let angulo2 = 1;
let angulo3 = 60;
let peca = "cavalo";
let movimento = "l"

/*switch(peca.toLowerCase()){
    case"torre":
        console.log("Torre anda na vertical e na horizontal, não pula peças");
        break;

    case "cavalo":
        console.log("Cavalo anda em L");
        break;

    case "rei":
        console.log("Rei ana só uma casa para qualquer direção");
        break;
    default:
        console.log("Erro")
}*/

/*
let nota = 45;

if(nota >= 90 && nota <= 100){
    console.log("Nota A");
}
else if(nota >= 80 && nota < 90){
    console.log("Nota B");
}
else if(nota >= 70 && nota < 80){
    console.log("Nota C");
}
else if(nota >= 60 && nota < 70){
    console.log("Nota D");
}
else if(nota >=50 && nota < 60){
    console.log("Nota E");
}
else if (nota < 50 && nota >= 0){
    console.log("Nota F");
}
else {
    console.log("Erro - Nota inválida")
}*/

/*
let numero1 = 1;
let numero2 = 1;
let numero3 = 1;

if (numero1 % 2 ===0 || numero2 % 2 === 0 || numero3 % 2 ===0){
    console.log(true);
}
else{
    console.log(false);
}

if (numero1 % 2 !==0 || numero2 % 2 !== 0 || numero3 % 2 !==0){
    console.log(true);
}
else{
    console.log(false);
}*/

/*
let custoDoProduto = 10;
let valorDeVenda = 20;

if (custoDoProduto >= 0 && valorDeVenda >=0){
    let custoTotalDoProduto = custoDoProduto * 1.2;
    let lucroDoProduto = (valorDeVenda - custoTotalDoProduto) *1000;
    console.log(lucroDoProduto);
}
else{
    console.log("Erro - Valor abaixo de 0");
}*/

let descontoInss;
let descontoIr;



let salarioBruto = 2594.92;



if(salarioBruto <= 1556.94){
    descontoInss = salarioBruto * 0.08;
}
else if (salarioBruto <= 2594.92){
    descontoInss = salarioBruto * 0.09;
}
else if (salarioBruto <= 5189.82){
    descontoInss = salarioBruto * 0.11;
}
else{
    descontoInss = 570,88;
}



let salarioBase = salarioBruto - descontoInss;

console.log ("Salario base: " + salarioBase);


if (salarioBase <= 1903.98){
    descontoIr = 0;
}
else if (salarioBase <=2826.65){
    descontoIr = (salarioBase *0.075) - 142.80;
}
else if(salarioBase <= 3751.05){
    descontoIr = (salarioBase * 0,15) - 354,80;
}

else if (salarioBase <= 4664.68){
    descontoIr = (salarioBase * 0.225) - 636,13;
}
else {
    descontoIr = (salarioBase * 0.275) - 869.36;
}



console.log("Salario Líquido: " + (salarioBase - descontoIr));





