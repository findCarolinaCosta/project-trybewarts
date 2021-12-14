const inputEmail = document.getElementById('input-email-header');
const inputSenha = document.getElementById('input-senha-header');
const botaoEntrar = document.getElementById('botao-entrar');
const buttonSubmit = document.getElementById('submit-btn');
const checkboxAgreement = document.getElementById('agreement');
const menuBtn = document.getElementById('menu');
      formHeader = document.getElementById('form-header');
      mainTag = document.getElementsByTagName('main')[0];

function validarLogin() {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

botaoEntrar.addEventListener('click', validarLogin);

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



menuBtn.addEventListener('click', () => {
    formHeader.classList.contains('close') ? (
    formHeader.classList.remove('close'),
    formHeader.classList.add('open'),
    mainTag.classList.remove('normalMargin'),
    mainTag.classList.add('withMargin')
  ) : (
    formHeader.classList.remove('open'), 
    formHeader.classList.add('close'),
    mainTag.classList.remove('withMargin'),
    mainTag.classList.add('normalMargin')
  )
})
