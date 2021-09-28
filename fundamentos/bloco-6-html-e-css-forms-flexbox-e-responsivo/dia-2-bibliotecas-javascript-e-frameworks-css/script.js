import './node_modules/just-validate/dist/js/just-validate.js'

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

var picker = new Pikaday ({field:document.getElementById('datepicker')});

new window.JustValidate('.js-form', {
    rules: {
        nome: {
        required: true,
        minLength: 3,
        maxLength: 40
      },
      email: {
        required: true,
        email: true,
        maxLength: 50
      },
      cpf: {
        required: true,
        maxLength: 11
      },
      endereco: {
        required: true,
        maxLength: 200
      },
      cidade: {
        required: true,
        maxLength: 28
      },
      estado: {
        required: true,
      },
      radio: {
        required: true,
      },
      resumoCurriculo: {
        required: true,
        maxLength: 1000
      },
      cargo: {
        required: true,
        maxLength: 40
      },
      descricaoCargo: {
        required: true,
        maxLength: 500
      },
      data: {
        required: true,
      }
    },
    messages: {
      nome: {
        required: 'O campo de nome é obrigatório.',
        maxLength: 'O limite é de 40 caracteres.',
        minLength: "O mínimo são 3 caracteres."
      },
      email: {
        required: 'O campo de email é obrigatório.',
        email: 'O email digitado não é válido.',
        maxLength: 'O limite é de 50 caracteres.'
      },
      cpf: {
        required: 'O campo de CPF é obrigatório.',
        maxLength: 'O limite é de 11 caracteres.'
      },
      endereco: {
        required: 'O campo endereço é obrigatório.',
        maxLength: 'O limite é de 200 caracteres.'
      },
      cidade: {
        required: 'O campo cidade é obrigatório.',
        maxLength: 'O limite é de 28 caracteres.'
      },
      estado: {
        required: 'O campo estado é obrigatório.',
      },
      radio: {
        required: 'A escolha de um item é obrigatória.',
      },
      resumoCurriculo: {
        required: 'Este campo é obrigatório.',
        maxLength: 'O limite é de 1000 caracteres.'
      },
      cargo: {
        required: 'Este campo é obrigatório.',
        maxLength: 'O limite é de 40 caracteres.'
      },
      descricaoCargo: {
        required: 'Este campo é obrigatório.',
        maxLength: 'O limite é de 500 caracteres.'
      },
      data: {
        required: 'Este campo é obrigatório.',
      }
    },
    submitHandler: function (form, values) {
        console.log(form, values);
      }});