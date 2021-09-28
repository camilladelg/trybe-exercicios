//1-Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
//Adição (a + b)
//Subtração (a - b)
//Multiplicação (a * b)
//Divisão (a / b)
//Módulo (a % b)
let a = 5;
let b = 10;
let c = 2;

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log(adicao);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);

//2-Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.
if (a>b){
    console.log(a);
}
else if(b>a){
    console.log(b);
}
else{
    console.log(a||b);
}

//3-Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
if (a > b && a > c) {
    console.log(a)
}

else if( b > a && a > c){
    console.log(b);
}
else{
    console.log(c)
}

//4-Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero", caso contrário.
let numero = 0; 
if (numero < 0) {
    console.log ("negative")
}
else if (numero > 0) {
    console.log("positive");    
}
else{
    console.log("zero");
}

//5-Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um 
//triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//(codigo trybe)
let angulo1 = 60;
let angulo2 = 60;
let angulo3 = 60;
let somaDosAngulosInternos = angulo1 + angulo2 + angulo3;
let angulospositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if(angulospositivos) {
    if (somaDosAngulosInternos === 180){
        console.log(true);
    }
    else{
        console.log(false);
    };
}else {
    console.log("Erro - O angulo não pode ser igual ou menor que 0")
}


//6-Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
let peca = "cavalo";

switch(peca.toLowerCase()){
    case"torre":
        console.log("A Torre anda na vertical e na horizontal, não pula peças");
        break;

    case "cavalo":
        console.log("O Cavalo anda em L");
        break;
    
    case "peao":
        console.log("O Peão na primeira jogada pode andar duas casas para frente, nas demais anda apenas uma")

    case "rei":
        console.log("O Rei ana só uma casa para qualquer direção");
        break;

    case "bispo":
        console.log("O Bispo anda na diagonal");

    case "rainha":
        console.log("A Rainha anda em todas as direções")

    default:
        console.log("Erro")
        break;
}

//7-Escreva um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
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
}

//8-Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false .
let numero1 = 1;
let numero2 = 1;
let numero3 = 1;

if (numero1 % 2 ===0 || numero2 % 2 === 0 || numero3 % 2 ===0){
    console.log(true);
}
else{
    console.log(false);
}

//9-Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false .
if (numero1 % 2 !==0 || numero2 % 2 !== 0 || numero3 % 2 !==0){
    console.log(true);
}
else{
    console.log(false);
}

//10-Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, 
//calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
//  *Atente que, sobre o custo do produto, incide um imposto de 20%, que deve ser considerado no cálculo do lucro.
//  *Seu programa também deve emitir uma mensagem de erro e encerrar, caso algum dos seus valores de entrada seja menor que zero.
//  *O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
//      *valorCustoTotal = valorCusto + impostoSobreOCusto
//      *lucro = valorVenda - valorCustoTotal (lucro de um produto)
//      (codifo trybe)
let custoDoProduto = 10;
let valorDeVenda = 20;

if (custoDoProduto >= 0 && valorDeVenda >=0){
    let custoTotalDoProduto = custoDoProduto * 1.2;
    let lucroDoProduto = (valorDeVenda - custoTotalDoProduto) *1000;
    console.log(lucroDoProduto);
}
else{
    console.log("Erro - Valor abaixo de 0");
}

//11-Uma pessoa de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido 
//a ser recebido por ela.
//  *A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
//      *INSS (Instituto Nacional do Seguro Social)
//      *Salário bruto até R$ 1.556,94: alíquota de 8%
//      *Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
//      *Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
//      *Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
//  *IR (Imposto de Renda)
//      *Até R$ 1.903,98: isento de imposto de renda
//      *De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
//      *De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
//      *De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
//      *Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
//      (codigo trybe)
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




