const inputEmail = document.getElementById('input-email');
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
  let count = document.getElementsByClassName('counter');
  const current = event.currentTarget;
  const maxLength = current.getAttribute('maxlength');
  const currentLength = current.value.length;

  if (currentLength >= maxLength) {
    alert('Atingido o máximo de caractere');
  }
  count = maxLength - currentLength;
  console.log(count); // não está funcionando
}
textarea.addEventListener('input', countCaractere);
