const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

const addTurno = (objeto, chave, valor) => objeto[chave] = valor;
addTurno(lesson2, 'turno', 'manhã');
console.log(lesson2);

const listaKeys = objeto => Object.keys(objeto);
console.log(listaKeys(lesson1));

const tamanhoObjeto = (objeto) => Object.entries(objeto).length;
console.log(tamanhoObjeto(lesson1));

const valoresObjeto = objeto => Object.values(objeto);
console.log(valoresObjeto(lesson3));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

const totalDeAlunos = () => {
    const alunosLesson1 = allLessons.lesson1.numeroEstudantes;
    const alunosLesson2 = allLessons.lesson2.numeroEstudantes;
    const alunosLesson3 = allLessons.lesson3.numeroEstudantes;
    const total = `${alunosLesson1 + alunosLesson2 + alunosLesson3}`;
    console.log(total)
}
totalDeAlunos();

const valorDaChave = (objeto, index) => {
    const chaveObjeto = Object.values(objeto)[index];
    console.log(chaveObjeto);
}
valorDaChave(lesson1, 0);

const varificaPar = (objeto, chave, valor) => {
    const chaveEValor = Object.entries(objeto);
    for (let i = 0; i < chaveEValor.length; i += 1) {
        if (chaveEValor[i].includes(chave) && chaveEValor[i].includes(valor)) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
varificaPar(lesson1, 'materia', 'Matemática');

// código trybe
// const verifyPair = (obj, key, value) => {
//     const arr = Object.entries(obj);
//     let isEqual = false;
//     for (let index in arr) {
//         console.log(arr[index]);
//       if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
//     }
//     return isEqual;
//   };
//   console.log(verifyPair(lesson2,'professor','Carlos'));

const aulasMatematica = (objeto) => {
    let alunosMatematica = 0;
    const objetoAll = Object.keys(objeto);
    for (let i in objetoAll) {
        if (objeto[objetoAll[i]].materia === 'Matemática') {
            alunosMatematica += objeto[objetoAll[i]].numeroEstudantes;
        }
    } 
    console.log(alunosMatematica);
}
aulasMatematica(allLessons);

const getInfo = (obj, name) => {
    const allLessons = [];
    let allStudent = 0;
    const array = Object.values(obj);
    console.log(array);
    for (index in array) {
      if (array[index].professor === name) {
        allLessons.push(array[index].materia)
        allStudent += array[index].numeroEstudantes;
      }
    }
  return { lessons: allLessons, estudantes: allStudent };
  }
  
  const createReport = (allLessons, name) => {
    const report = {};
    report.professor = name;
    Object.assign(report, getInfo(allLessons, name));
    return report;
  }
  console.log(createReport(allLessons, 'Maria Clara'));