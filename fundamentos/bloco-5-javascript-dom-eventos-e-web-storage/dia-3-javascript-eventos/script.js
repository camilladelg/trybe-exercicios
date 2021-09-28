function createDaysOfTheWeek() {
    let weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    let weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      let days = weekDays[index];
      let dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

// Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente 
// cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . 
// Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
//   Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
//   Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
//   Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function diasDoMes(arrayDeNumeros) {
    let recuperaIdDias = document.getElementById('days');
    for (let i = 0; i < arrayDeNumeros.length; i += 1) {
        let criaLi = document.createElement('li');
        let contador = arrayDeNumeros[i];
        criaLi.innerText = contador;
        let classeDia = 'day';
        let classeFeriado = 'holiday';
        let classeSexta = 'friday';

        criaLi.className = classeDia;
                
        if (contador === 24 || contador === 31){
            criaLi.className = classeDia + ' ' + classeFeriado;
        } else if ( contador === 4 || contador === 11 || contador === 18) {
            criaLi.className = classeDia + ' ' + classeSexta;
        } else if (contador === 25 ){
            criaLi.className = classeDia + ' ' + classeFeriado + ' ' + classeSexta;
        }
        recuperaIdDias.appendChild(criaLi);
    }
}
diasDoMes(dezDaysList);

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function botaoFeriado(stringFeriado) {
    let recuperaDivButtonsContainer = document.querySelector('.buttons-container');
    let criaBotao = document.createElement('button');
    criaBotao.id = 'btn-holiday';
    criaBotao.innerText = stringFeriado;
    recuperaDivButtonsContainer.appendChild(criaBotao);
}
botaoFeriado('Feriado');

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a 
// classe "holiday" .
//   É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com 
//   a cor "rgb(238,238,238)" .
// códigotrybe
function eventoClickFeriado() {
    let recuperaBotao = document.querySelector('#btn-holiday');
    let recuperaFeriado = document.querySelectorAll('.holiday');
    let corDeFundoOrigem = 'rgb(238,238,238)';
    let novaCorDeFundo = 'lightgreen';

    recuperaBotao.addEventListener('click', function() {
        for (let i = 0; i < recuperaFeriado.length; i += 1) {
            if(recuperaFeriado[i].style.backgroundColor === novaCorDeFundo) {
                recuperaFeriado[i].style.backgroundColor = corDeFundoOrigem;
            } else {
                recuperaFeriado[i].style.backgroundColor = novaCorDeFundo;
            }
        }
    })
};
eventoClickFeriado();

// Exercício 4
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
//  Adicione a este botão o ID "btn-friday" .
//  Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
function sextou(stringSexta) {
let recuperaDivButtonsContainer = document.querySelector('.buttons-container');
let botaoSexta = document.createElement('button');
botaoSexta.id = 'btn-friday'
botaoSexta.innerText = stringSexta;
recuperaDivButtonsContainer.appendChild(botaoSexta);
}
sextou('Sexta-Feira');

// Exercício 5
//  Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
//  É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
// códigotrybe
let listaSextou = [ 4, 11, 18, 25 ];
function eventoClickSexta(arrayLista) {
    let recuperaBotao = document.querySelector('#btn-friday');
    let recuperaSexta = document.getElementsByClassName('friday');
    let textoDeOrigem;
    let novoTexto = 'Sextou!!!';

    recuperaBotao.addEventListener('click', function() {
        for (let i = 0; i < recuperaSexta.length; i += 1) {
            textoDeOrigem = arrayLista[i];
            if(recuperaSexta[i].innerText === novoTexto) {
                recuperaSexta[i].innerText = textoDeOrigem;
            } else {
                recuperaSexta[i].innerText = novoTexto;
            }
        }
    })
};
eventoClickSexta(listaSextou)

// Exercício 6
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia 
// deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// códigotrybe
function efeitoZoom() {
    let recuperaDias = document.querySelector('#days');
  
    recuperaDias.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600';
    })
  };
  
  function efeitoOriginal() {
    let recuperaDias = document.querySelector('#days');
  
    recuperaDias.addEventListener('mouseout', function(event) {
      event.target.style.fontWeight = '200';
      event.target.style.fontSize = '20px';
    })
  };
  
  efeitoZoom();
  efeitoOriginal();

// Exercício 7
//  Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome 
//  da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
//  O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function tarefaPersonalizada(stringDaTarefa) {
    let recuperaMinhastarefas = document.querySelector('.my-tasks');
    let criaSpan = document.createElement('span');
    criaSpan.innerText = stringDaTarefa;
    recuperaMinhastarefas.appendChild(criaSpan);

    criaSpan.addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = 'red';
        event.target.style.fontWeight = '600';
        event.target.style.fontSize = '35px';
        event.target.style.color = "white"
    })

    criaSpan.addEventListener('mouseout', function(event) {
        event.target.style.backgroundColor = '#eee';
        event.target.style.fontWeight = '200';
        event.target.style.fontSize = '18px';
        event.target.style.color = '#666';
    })

}
tarefaPersonalizada('Estudar! Estudar! Estudar!');

// Exercício 8
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como 
// parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
//  O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
//  O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
function adicionaLegendaCor(stringCor) {
    let recuperaMinhastarefas = document.querySelector('.my-tasks');
    let criaDivTarefa = document.createElement('div');
    criaDivTarefa.className = 'task';
    criaDivTarefa.innerText = 'Estudar todos os conteúdos e exercícios da Trybe.';
    criaDivTarefa.style.color = stringCor;

    recuperaMinhastarefas.appendChild(criaDivTarefa);
}
adicionaLegendaCor('grey');

// Exercício 9
// Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este 
// elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
//  Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa 
//  selecionada.

function adicionaClasseTaskSelected() {
    let recuperaDivTask = document.querySelector('.task');

    recuperaDivTask.addEventListener('click', function(event) {
        if(recuperaDivTask.className === 'task') {        
            event.target.className = 'task selected';
            event.target.style.backgroundColor = 'red';
        } else { event.target.className = 'task';
            event.target.style.backgroundColor = '#eee';}
    });
}
adicionaClasseTaskSelected()

