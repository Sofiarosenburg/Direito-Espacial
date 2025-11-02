// script.js

//aqui a gente pega os elementos principais do site
const controleAno = document.getElementById('controle-ano');
const valorAno = document.getElementById('valor-ano');
const contagemSatelites = document.getElementById('contagem-satelites');
const contagemDetritos = document.getElementById('contagem-detritos');

const botoesTratado = document.querySelectorAll('.botoes-tratado button');
const conteudosTratado = document.querySelectorAll('.conteudo-tratado');
const cartoes = document.querySelectorAll('.cartao');


// 🚀 Funções pra calcular número de satélites e detritos com base no ano escolhido
function obterContagemSatelites(ano) {
  if (ano < 1990) {
    return Math.floor(50 + (ano - 1960) * 15);
  } else if (ano < 2010) {
    return Math.floor(500 + (ano - 1990) * 175);
  } else if (ano <= 2025) {
    return Math.floor(4000 + (ano - 2010) * 600);
  } else {
    return Math.floor(13100 + (ano - 2025) * 1000);
  }
}

function obterContagemDetritos(ano) {
  if (ano < 1990) {
    return Math.floor(100 + (ano - 1960) * 30);
  } else if (ano < 2010) {
    return Math.floor(1000 + (ano - 1990) * 500);
  } else if (ano <= 2025) {
    let anosDepois2010 = ano - 2010;
    return Math.floor(11000 * Math.pow(1.08, anosDepois2010));
  } else {
    let anosDepois2025 = ano - 2025;
    return Math.floor(36000 + anosDepois2025 * 500);
  }
}


// atualiza os números quando o usuário mexe no controle de ano
controleAno.addEventListener('input', () => {
  const ano = +controleAno.value;
  valorAno.textContent = ano;
  contagemSatelites.textContent = obterContagemSatelites(ano);
  contagemDetritos.textContent = obterContagemDetritos(ano);
});


// alterna os tratados (mostra/oculta o texto de cada um)
function alternarTratado(idTratado) {
  conteudosTratado.forEach(conteudo => {
    if (conteudo.id === idTratado) {
      conteudo.classList.toggle('escondido');
    } else {
      conteudo.classList.add('escondido');
    }
  });
}

// adiciona evento de clique pros botões dos tratados
botoesTratado.forEach(botao => {
  botao.addEventListener('click', () => {
    const id = botao.getAttribute('data-tratado');
    alternarTratado(id);
  });
});


// cartões de curiosidades (viram quando clica)
cartoes.forEach(cartao => {
  cartao.addEventListener('click', () => {
    cartao.classList.toggle('virado');
  });
});
