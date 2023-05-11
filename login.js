const form = document.querySelector('form');
const arquivoSecreto = document.getElementById('arquivoSecreto');
const email = 'anomymus.admsys@gmail.com';
const senha = 'anonymusmaininfo6284f6';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const emailInput = document.getElementById('email').value;
  const senhaInput = document.getElementById('senha').value;
  
  if (emailInput === email && senhaInput === senha) {
    arquivoSecreto.style.display = 'block';
  } else {
    alert('Email ou senha incorretos!');
  }
});