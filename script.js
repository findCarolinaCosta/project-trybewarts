const inputEmail = document.getElementById('input-email-header');
const inputSenha = document.getElementById('input-senha');
const botaoEntrar = document.getElementById('botao-entrar');

function validarLogin() {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

botaoEntrar.addEventListener('click', validarLogin);

const buttonSubmit = document.getElementById('submit-btn');
const checkboxAgreement = document.getElementById('agreement');

function habilitaSubmit() {
  const checkboxAgreementChecked = document.getElementById('agreement').checked;
  if (checkboxAgreementChecked === false) {
    buttonSubmit.disabled = true;
  } else {
    buttonSubmit.disabled = false;
  }
}

buttonSubmit.disabled = true;
checkboxAgreement.addEventListener('click', habilitaSubmit);

const textarea = document.querySelector('textarea');
function countCaractere(event) {
  let count = document.getElementById('counter');
  const current = event.currentTarget;
  const maxLength = current.getAttribute('maxlength');
  const currentLength = current.value.length;

  if (currentLength >= maxLength) {
    alert('Atingido o máximo de caractere');
  }
  count = maxLength - currentLength;
  document.getElementById('counter').innerText = count;
}
textarea.addEventListener('input', countCaractere);

const myStorage = localStorage;

function salvaMaterias() {
  const materias = document.getElementsByClassName('subject');
  const arrayMaterias = [];

  for (const index in materias) {
    if (materias[index].checked === true) {
      arrayMaterias.push(materias[index].value);
    }
  }
  myStorage.setItem('Matérias', arrayMaterias);
}

function salvaNota() {
  const notas = document.getElementsByClassName('notas');

  for (const index in notas) {
    if (notas[index].checked === true) {
      myStorage.setItem('Avaliação', notas[index].value);
    }
  }
}

const main = document.getElementsByTagName('main')[0];
const localInfos = document.getElementById('infos');
const localName = 'Nome: ' + localStorage.getItem('Nome:');
const localEmail = 'Email: ' + localStorage.getItem('Email:');
const localCasa = 'Casa: ' + localStorage.getItem('Casa:');
const localFamilia = 'Família: ' + localStorage.getItem('Familia: ');
const localMateria = 'Matérias: ' + localStorage.getItem('Matérias');
const localAvaliacao = 'Avaliação: ' + localStorage.getItem('Avaliação');
const localObs = 'Observações: ' + localStorage.getItem('Observações:');


function data() {
  main.removeChild(document.getElementById('evaluation-form'));
  const allInformation = [
    localName,
    localEmail,
    localCasa,
    localFamilia,
    localMateria,
    localAvaliacao,
    localObs
  ]
  for (index in allInformation) {
    const paragraph = document.createElement('p');
    localInfos.appendChild(paragraph);
    switch (allInformation[index]) {
      case 1: allInformation[index] === allInformation[0];
        paragraph.innerText = allInformation[index];
      case 2: allInformation[index] === allInformation[1];
        paragraph.innerText = allInformation[index];
      case 3: allInformation[index] === allInformation[6];
        paragraph.innerText = allInformation[index];
      case 3: allInformation[index] === allInformation[2];
        paragraph.innerText = allInformation[index];
      case 5: allInformation[index] === allInformation[3];
        paragraph.innerText = allInformation[index];
      case 6: allInformation[index] === allInformation[4];
        paragraph.innerText = allInformation[index];
      case 7: allInformation[index] === allInformation[5];
        paragraph.innerText = allInformation[index];
    }
    paragraph.innerText = allInformation[index];
  }
}

function salvarInputs() {
  myStorage.setItem('Nome:', document.getElementById('input-name').value + ' ' + document.getElementById('input-lastname').value);
  myStorage.setItem('Email:', document.getElementById('input-email').value);
  myStorage.setItem('Casa:', document.getElementById('house').value);
  myStorage.setItem('Observações:', document.getElementById('textarea').value);

  if (document.getElementById('front-end').checked === true) {
    myStorage.setItem('Familia: ', 'Frontend');
  } else if (document.getElementById('back-end').checked === true) {
    myStorage.setItem('Familia: ', 'Backend');
  } else {
    myStorage.setItem('Familia: ', 'Fullstack');
  }
  salvaMaterias();
  salvaNota();
  data();
}

buttonSubmit.addEventListener('click', (event) => {
  event.preventDefault();
});
buttonSubmit.addEventListener('click', salvarInputs);
