// ---------- ELEMENTOS ----------
const controleAno = document.getElementById('controle-ano'); // barra deslizante do ano
const valorAno = document.getElementById('valor-ano'); // número que mostra o ano atual
const totalSatelites = document.getElementById('total-satelites'); // quantidade de satélites
const totalDetritos = document.getElementById('total-detritos'); // quantidade de detritos espaciais
const botoesTratados = document.querySelectorAll('.botoes-tratados button'); // botões dos tratados
const conteudosTratados = document.querySelectorAll('.conteudo-tratado'); // textos dos tratados
const cartoes = document.querySelectorAll('.cartao'); // cartões interativos (curiosidades)

// ---------- FUNÇÕES ----------
function obterTotalSatelites(ano) { // função pra calcular número de satélites com base no ano
  if (ano < 1990) return Math.floor(50 + (ano - 1960) * 15);
  if (ano < 2010) return Math.floor(500 + (ano - 1990) * 175);
  if (ano <= 2025) return Math.floor(4000 + (ano - 2010) * 600);
  return Math.floor(13100 + (ano - 2025) * 1000);
}

function obterTotalDetritos(ano) { // função pra calcular número de detritos com base no ano
  if (ano < 1990) return Math.floor(100 + (ano - 1960) * 30);
  if (ano < 2010) return Math.floor(1000 + (ano - 1990) * 500);
  if (ano <= 2025) return Math.floor(11000 * Math.pow(1.08, ano - 2010));
  return Math.floor(36000 + (ano - 2025) * 500);
}

// ---------- EVENTOS ----------
controleAno.addEventListener('input', () => { // quando o usuário move o controle de ano
  const ano = +controleAno.value; // pega o valor numérico do controle
  valorAno.textContent = ano; // mostra o ano atual na tela
  totalSatelites.textContent = obterTotalSatelites(ano); // atualiza satélites
  totalDetritos.textContent = obterTotalDetritos(ano); // atualiza detritos
});

function alternarTratado(idTratado) { // mostra/esconde o tratado clicado
  conteudosTratados.forEach(conteudo => {
    if (conteudo.id === idTratado) {
      conteudo.classList.toggle('oculto');
    } else {
      conteudo.classList.add('oculto');
    }
  });
}

botoesTratados.forEach(botao => { // adiciona evento de clique a cada botão de tratado
  botao.addEventListener('click', () => {
    alternarTratado(botao.getAttribute('data-tratado')); // pega o tratado certo pelo atributo
  });
});

// ---------- CARTÕES (FLIP) ----------
cartoes.forEach(cartao => { // quando o cartão é clicado, vira pra mostrar o outro lado
  cartao.addEventListener('click', () => {
    cartao.classList.toggle('virado');
  });
});
