// ---------- ELEMENTOS ----------
// Pegando os elementos do HTML pra poder manipular depois
const yearSlider = document.getElementById('year-slider'); // o controle deslizante dos anos
const yearValue = document.getElementById('year-value'); // o número do ano que aparece
const satelliteCount = document.getElementById('satellite-count'); // contador de satélites
const debrisCount = document.getElementById('debris-count'); // contador de detritos espaciais
const treatyButtons = document.querySelectorAll('.treaty-buttons button'); // botões dos tratados
const treatyContents = document.querySelectorAll('.treaty-content'); // conteúdos escondidos dos tratados
const cards = document.querySelectorAll('.card'); // cards interativos dos fatos curiosos

// ---------- FUNÇÕES ----------
// Função pra calcular mais ou menos o número de satélites conforme o ano
function getSatelliteCount(year) {
  if (year < 1990) return Math.floor(50 + (year - 1960) * 15); // anos antigos, pouquíssimos satélites
  if (year < 2010) return Math.floor(500 + (year - 1990) * 175); // começa a crescer
  if (year <= 2025) return Math.floor(4000 + (year - 2010) * 600); // explosão na era moderna
  return Math.floor(13100 + (year - 2025) * 1000); // projeção pro futuro
}

// Função parecida, mas pra contar os detritos espaciais (o “lixo” orbitando)
function getDebrisCount(year) {
  if (year < 1990) return Math.floor(100 + (year - 1960) * 30); // nos primeiros anos, pouca sujeira
  if (year < 2010) return Math.floor(1000 + (year - 1990) * 500); // começa a acumular
  if (year <= 2025) return Math.floor(11000 * Math.pow(1.08, year - 2010)); // cresce exponencialmente
  return Math.floor(36000 + (year - 2025) * 500); // tendência de aumentar mais ainda
}

// ---------- EVENTOS ----------
// Atualiza os números conforme o usuário move o slider
yearSlider.addEventListener('input', () => {
  const year = +yearSlider.value; // pega o ano atual
  yearValue.textContent = year; // mostra o número na tela
  satelliteCount.textContent = getSatelliteCount(year); // atualiza os satélites
  debrisCount.textContent = getDebrisCount(year); // atualiza os detritos
});

// Função que mostra ou esconde o conteúdo do tratado clicado
function toggleTreaty(treatyId) {
  treatyContents.forEach(content => {
    if (content.id === treatyId) {
      // se for o tratado clicado, alterna visibilidade
      content.classList.toggle('hidden');
    } else {
      // esconde todos os outros tratados
      content.classList.add('hidden');
    }
  });
}

// Liga cada botão ao seu conteúdo correspondente
treatyButtons.forEach(button => {
  button.addEventListener('click', () => {
    toggleTreaty(button.getAttribute('data-treaty')); // pega o ID do tratado e mostra
  });
});

// ---------- CARDS FLIP ----------
// Faz os cards virarem quando clicados (efeito frente e verso)
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped'); // adiciona ou remove a classe pra girar
  });
});
