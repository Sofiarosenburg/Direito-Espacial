// ---------- ELEMENTOS DA PÁGINA ----------
const controleAno = document.getElementById('controle-ano');
const valorAno = document.getElementById('valor-ano');
const contagemSatelites = document.getElementById('contagem-satelites');
const contagemDetritos = document.getElementById('contagem-detritos');
const botoesTratados = document.querySelectorAll('.botoes-tratados button');
const conteudosTratados = document.querySelectorAll('.conteudo-tratado');
const cartoes = document.querySelectorAll('.cartao');

// ---------- FUNÇÕES DE CÁLCULO ----------
function obterContagemSatelites(ano) {
  if (ano < 1990) return Math.floor(50 + (ano - 1960) * 15);
  if (ano < 2010) return Math.floor(500 + (ano - 1990) * 175);
  if (ano <= 2025) return Math.floor(4000 + (ano - 2010) * 600);
  return Math.floor(13100 + (ano - 2025) * 1000);
}

function obterContagemDetritos(ano) {
  if (ano < 1990) return Math.floor(100 + (ano - 1960) * 30);
  if (ano < 2010) return Math.floor(1000 + (ano - 1990) * 500);
  if (ano <= 2025) return Math.floor(11000 * Math.pow(1.08, ano - 2010));
  return Math.floor(36000 + (ano - 2025) * 500);
}

// ---------- EVENTOS DO SLIDER ----------
controleAno.addEventListener('input', () => {
  const ano = +controleAno.value;
  valorAno.textContent = ano;
  contagemSatelites.textContent = obterContagemSatelites(ano);
  contagemDetritos.textContent = obterContagemDetritos(ano);
});

// ---------- MOSTRAR E ESCONDER TRATADOS ----------
function alternarTratado(idTratado) {
  conteudosTratados.forEach(conteudo => {
    if (conteudo.id === idTratado) {
      conteudo.classList.toggle('escondido');
    } else {
      conteudo.classList.add('escondido');
    }
  });
}

botoesTratados.forEach(botao => {
  botao.addEventListener('click', () => {
    alternarTratado(botao.getAttribute('data-tratado'));
  });
});

// ---------- EFEITO DE VIRAR OS CARTÕES ----------
cartoes.forEach(cartao => {
  cartao.addEventListener('click', () => {
    cartao.classList.toggle('virado');
  });
});
