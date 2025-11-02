// script.js
// tentei deixar o código mais organizado, mas ainda tem uns detalhes pra revisar depois

// ---- botoes ---- //

const botoes = document.querySelectorAll('.botoes-tratados button') ;
const tratados = document.querySelectorAll ('.conteudo-tratado');

//mostrar um tratado de cada vez
 botoes.forEach((botao) => {
   
  botao.addEventListener('click', () =>   {
    const idTratado = botao.getAttribute ('data-tratado');
    
    tratados.forEach((t) => {
      if (t.id === idTratado) {
        t.classList.toggle('escondido'); // alterna visibilidade
      } else {
        t.classList.add('escondido');
      
      }
     });
  });
 });

// ---- tinha do tempo ---- // 

 const controleAno = document.getElementById('controle-ano') ;
const rotuloAno = document.getElementById('rotulo-ano');
const painelInfo = document.getElementById('painel-info');

  //  lista de marcos históricos (ver as datas) 
const eventosEspaciais  =
{
  1957: 'URSS lança o Sputnik, o primeiro satélite artificial da Terra.',
  1961: 'Yuri Gagarin torna-se o primeiro humano a viajar ao espaço.',
  1967: 'Tratado do Espaço Exterior é assinado, base do Direito Espacial.',
  1979: 'Convenção da Lua define regras sobre recursos lunares.',
  1984: 'Acordo sobre atividades de estados na Lua (poucos países assinaram).',
  1998: 'Estação Espacial Internacional começa a ser montada.',
  2015: 'EUA aprovam lei sobre mineração de asteroides.'
};

// valor inicial (usei 1967 porque é o mais importante)

controleAno.value  = 1967;
rotuloAno.textContent = 'Ano: 1967'  ;
 painelInfo.textContent  = eventosEspaciais[1967];

// atualiza o painel quando move

    controleAno.addEventListener ('input', function() {
  const ano = this.value;
  rotuloAno.textContent = 'Ano: ' + ano;
  if (eventosEspaciais[ano]) {
    painelInfo.textContent = eventosEspaciais[ano];
  } else {
    
    painelInfo.textContent = 'Sem registro importante nesse ano (acho)';
  }
});

// ---- curiosidade  ---- //

const cartoes  = document.querySelectorAll('.cartao');

// virar o cartão quando clicar
cartoes.forEach((cartao) => {
  cartao.addEventListener('click', () => {
    cartao.classList.toggle('virado');
  
  });
  
});

// às vezes o botão de tratado some rápido demais, talvez mexer nisso depois
// mas tá bom assim por enquanto
