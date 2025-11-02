// script.js
// Tudo aqui está em português e sincronizado com o HTML e CSS

// Pegando os elementos principais do DOM
const controleAno = document.getElementById('controle-ano');
const valorAno = document.getElementById('valor-ano');
const contagemSatelites = document.getElementById('contagem-satelites');
const contagemDestrocos = document.getElementById('contagem-destrocos');
const conteudosTratado = document.querySelectorAll('.conteudo-tratado');
const cartoes = document.querySelectorAll('.cartao');

// Função que calcula a quantidade de satélites com base no ano
function obterSatelites(ano) {
  if (ano < 1990) return Math.floor(50 + (ano - 1960) * 15);
  if (ano < 2010) return Math.floor(500 + (ano - 1990) * 175);
  if (ano <= 2025) return Math.floor(4000 + (ano - 2010) * 600);
  return Math.floor(13100 + (ano - 2025) * 1000);
}

// Função que calcula a quantidade de destroços com base no ano
function obterDestrocos(ano) {
  if (ano < 1990) return Math.floor(100 + (ano - 1960) * 30);
  if (ano < 2010) return Math.floor(1000 + (ano - 1990) * 500);
  if (ano <= 2025) {
    let anosDepois = ano - 2010;
    return Math.floor(11000 * Math.pow(1.08, anosDepois));
  }
  let anosDepois2025 = ano - 2025;
  return Math.floor(36000 + anosDepois2025 * 500);
}

// Atualiza os números quando o usuário mexe no controle de ano
controleAno.addEventListener('input', () => {
  const ano = +controleAno.value;
  valorAno.textContent = ano;
  contagemSatelites.textContent = obterSatelites(ano);
  contagemDestrocos.textContent = obterDestrocos(ano);
});

// Mostra/esconde o tratado clicado
function alternarTratado(idTratado) {
  conteudosTratado.forEach(conteudo => {
    if (conteudo.id === idTratado) {
      conteudo.classList.toggle('oculto');
    } else {
      conteudo.classList.add('oculto');
    }
  });
}

// Faz o efeito de virar as curiosidades (cartões)
cartoes.forEach(cartao => {
  cartao.addEventListener('click', () => {
    cartao.classList.toggle('virado');
  });
});
