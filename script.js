// -------- TRATADOS --------
// esses botões servem pra abrir e fechar o texto dos tratados (acho q tá funcionando direitinho)

const botoesTratados = document.querySelectorAll('.botoes-tratados button');
const conteudosTratado = document.querySelectorAll('.conteudo-tratado');

// quando clicar num botão, aparece o texto do tratado correspondente
botoesTratados.forEach(botao => {
  botao.addEventListener('click', () => {
    const alvo = botao.getAttribute('data-tratado'); // pega o id do tratado

    conteudosTratado.forEach(secao => {
      // se for o tratado certo, mostra, senão esconde
      if (secao.id === alvo) {
        secao.classList.toggle('escondido'); // pra poder abrir e fechar clicando
      } else {
        secao.classList.add('escondido');
      }
    });
  });
});


// -------- LINHA DO TEMPO ESPACIAL --------
// aqui mostra eventos importantes da história do direito espacial

const controleAno = document.getElementById('controle-ano');
const rotuloAno = document.getElementById('rotulo-ano');
const painelInfo = document.getElementById('painel-info');

// fiz tipo um dicionário com os eventos por ano
const eventosEspaciais = {
  1957: "URSS lança o Sputnik 1 — o primeiro satélite artificial da Terra.",
  1961: "Yuri Gagarin se torna o primeiro humano no espaço.",
  1967: "Assinado o Tratado do Espaço Exterior — base do Direito Espacial.",
  1972: "Convenção de Responsabilidade define quem paga por danos no espaço.",
  1975: "Convenção de Registro: países precisam registrar seus satélites.",
  1979: "Acordo da Lua tenta regular o uso dos recursos lunares.",
  1998: "Começa a construção da Estação Espacial Internacional.",
  2015: "EUA fazem lei permitindo exploração comercial de asteroides (meio polêmico).",
  2025: "Novas discussões sobre lixo espacial e propriedade privada em órbita."
};

// valor inicial pra começar no ano do tratado principal
controleAno.value = 1967;
rotuloAno.textContent = "Ano: 1967";
painelInfo.textContent = eventosEspaciais[1967];

// atualiza conforme o usuário mexe na barrinha
controleAno.addEventListener('input', function () {
  const ano = this.value;
  rotuloAno.textContent = "Ano: " + ano;

  // se tiver evento cadastrado, mostra, se não, aparece uma frase genérica
  painelInfo.textContent = eventosEspaciais[ano] || "Nenhum evento importante registrado aqui (acho rs)";
});


// -------- CARTÕES INTERATIVOS --------
// esses cartões viram quando clica, tipo curiosidades espaciais

const cartoes = document.querySelectorAll('.cartao');

cartoes.forEach(cartao => {
  cartao.addEventListener('click', () => {
    cartao.classList.toggle('virado'); // vira o cartão (efeito bem simples mas funciona)
  });
});



// só uma mensagenzinha pra saber que o script carregou direitinho
console.log("🚀 Site sobre Direito Espacial funcionando (ufa!)");
