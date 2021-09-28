let estadosBrasileiros = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 
                        'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro',
                        'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

function addEstados() {
    let getEstado = document.querySelector('#estado');
    for(let i = 0; i < estadosBrasileiros.length; i += 1) {
        let criaOption = document.createElement('option')
        criaOption.innerText = estadosBrasileiros[i];
        criaOption.value = estadosBrasileiros[i];
        //criaOption.setAttribute('required', '');
        getEstado.appendChild(criaOption);
    }    
}
addEstados();

function validaDada(event) {
    event.preventDefault();
    let getData = document.getElementById('data');
    let textoData = getData.value;
    let separaData = textoData.split("/");
    let dia = separaData[0];
    console.log(dia);
    let mes = separaData[1];
    let ano = separaData[2];

    if (dia <= 0 || dia > 31) {
        alert("Dia inválido");
    }
    if (mes <=0 || mes > 12) {
        alert("Mês inválido");
    }
    if (ano <= 0) {
        alert("Ano inválido");
    }
}

function clicaBotao() {

    let getButton = document.getElementById('botao-submeter');
    getButton.addEventListener('click', validaDada)
}
clicaBotao()

function limpar(event) {
    event.preventDefault();
    let getForm = document.querySelectorAll('#form input, select, textarea');
    for (let i = 0; i < getForm.length; i += 1) {
        console.log(getForm[i].value);
        getForm[i].value = "";
        getForm[i].checked = false;
    }
}

function botaoLimpar() {
    let getLimpar = document.getElementById('limpar');
    getLimpar.addEventListener('click', limpar);

}
botaoLimpar()