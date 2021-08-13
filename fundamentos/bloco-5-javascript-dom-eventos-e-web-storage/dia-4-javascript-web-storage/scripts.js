let recuperaBody = document.querySelector('body');
let recuperaInputB = document.getElementById('input-background-color');
let recuperaInputCT = document.getElementById('input-color-text');
let recuperaInputFS = document.getElementById('input-font-size');
let recuperaInputEL = document.getElementById('input-line-height');
let recuperaInputFF = document.getElementById('input-font-family');

function corDeFundo() {    
    let = corDeFundoValor = recuperaBody.style.backgroundColor = recuperaInputB.value;

}
recuperaBody.addEventListener('keyup', corDeFundo);
localStorage.setItem('corDeFundo', 'corDeFundoValor');

function corDoTexto() {    
    recuperaBody.style.color = recuperaInputCT.value;

}
recuperaBody.addEventListener('keyup', corDoTexto);

function tamanhoFonte() {
    let valorAtribuido = recuperaBody.style.fontSize = recuperaInputFS.value + 'px';
    if (valorAtribuido == 'px'){
        recuperaBody.style.fontSize = '20px';
    }
}
recuperaBody.addEventListener('keyup', tamanhoFonte);

function espacoEntreLinhas() {
    let valorAtribuido = recuperaBody.style.lineHeight = recuperaInputEL.value + 'px';
    if (valorAtribuido == 'px'){
        recuperaBody.style.lineHeight = '22px';
        console.log(valorAtribuido);
    }
}
recuperaBody.addEventListener('keyup', espacoEntreLinhas);

function fonteDoTexto() {
    let valorAtribuido = recuperaBody.style.fontFamily = recuperaInputFF.value + '';
}
recuperaBody.addEventListener('keyup', fonteDoTexto);