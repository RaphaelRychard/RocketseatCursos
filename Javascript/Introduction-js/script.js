
/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

import { patients } from "./faker.js";


const IMC = (peso, altura) => {
  return (Number(peso) / (Number(altura ^ 2))).toFixed(2);
}

const printPatientIMC = (patient) => {
  return `
    Paciente ${patient.nome} 
    Possui o IMC de ${IMC(patient.peso, patient.altura)}
  `
}

for (let patient of patients) {
  const IMCMessage = printPatientIMC(patient)
  console.log(IMCMessage)
}

// return value;
