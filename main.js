const cAbedario = document.getElementById('card-abecedario');
const cSilabas = document.getElementById('card-silabas');
const cCuentos = document.getElementById('card-cuentos');

cAbedario.addEventListener('click', () => {
  saveTime();
  location.href = './abecedario/index.html';
});
cSilabas.addEventListener('click', () => {
  saveTime();
  location.href = './silabas/index.html';
});
cCuentos.addEventListener('click', () => {
  saveTime();
  location.href = './cuentos/index.html';
});

setInterval(timer, 1000)

