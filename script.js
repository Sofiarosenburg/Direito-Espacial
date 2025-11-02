// -------- TRATADOS --------
// mostra ou esconde os textos dos tratados espaciais

const botoesTratados = document.querySelectorAll('.botoes-tratados button');
const conteudosTratado = document.querySelectorAll('.conteudo-tratado');

botoesTratados.forEach(botao => {
  botao.addEventListener('click', () => {
    const alvo = botao.getAttribute('data-tratado');

    conteudosTratado.forEach(secao => {
      if (secao.id === alvo) {
        secao.classList.toggle('escondido'); // alterna visibilidade
      } else {
        secao.classList.add('escondido');
      }
    });
  });
});


// -------- LINHA DO TEMPO ESPACIAL --------
// fiz uma lista com os principais acontecimentos do direito espacial (acho que ficou bom)

const controleAno = document.getElementById('controle-ano');
const rotuloAno = document.getElementById('rotulo-ano');
const painelInfo = document.getElementById('painel-info');

// eventos históricos espaciais
const eventosEspaciais = {
  1957: "URSS lança o Sputnik 1 — o primeiro satélite artificial da Terra.",
  1961: "Yuri Gagarin torna-se o primeiro ser humano a ir ao espaço.",
  1967: "Assinado o Tratado do Espaço Exterior — base do Direito Espacial.",
  1972: "Convenção de Responsabilidade define regras sobre danos espaciais.",
  1975: "Convenção de Registro obriga países a registrarem seus satélites.",
  1979: "Acordo da Lua tenta regular recursos lunares (poucos assinaram).",
  1998: "Montagem da Estação Espacial Internacional começa.",
  2015: "EUA aprovam lei permitindo exploração de recursos de asteroides.",
  2025: "Cresce o debate sobre propriedade privada no espaço e lixo orbital."
};

// valor inicial
controleAno.value = 1967;
rotuloAno.textContent = "Ano: 1967";
painelInfo.textContent = eventosEspaciais[1967];

// atualiza quando o usuário mexe
controleAno.addEventListener('input', function () {
  const ano = this.value;
  rotuloAno.textContent = "Ano: " + ano;

  if (eventosEspaciais[ano]) {
    painelInfo.textContent = eventosEspaciais[ano];
  } else {
    painelInfo.textContent = "Nenhum registro espacial marcante nesse ano (acho rs)";
  }
});


// -------- CARTÕES --------
// virar o cartão ao clicar (achei divertido isso)

const cartoes = document.querySelectorAll('.cartao');

cartoes.forEach(cartao => {
  cartao.addEventListener('click', () => {
    cartao.classList.toggle('virado');
  });
});


// -------- SCROLL SUAVE (não tava no original, mas deixei pq fica chique) --------
const linksSuaves = document.querySelectorAll('a[href^="#"]');
linksSuaves.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const destino = document.querySelector(link.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// -------- teste no console --------
console.log("🚀 Site do Direito Espacial carregado certinho (ufa)");
