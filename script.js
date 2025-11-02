// Script responsável por mostrar e esconder o conteúdo dos tratados
// Deixei os nomes todos em português pra combinar com o HTML e o CSS

// Primeiro, pegamos todos os botões e as seções de conteúdo
const botoesTratado = document.querySelectorAll(".botoes-tratado button");
const conteudosTratado = document.querySelectorAll(".conteudo-tratado");

// Função pra mostrar o conteúdo certo quando o botão é clicado
botoesTratado.forEach(botao => {
  botao.addEventListener("click", () => {
    // Esconde tudo antes de mostrar o novo
    conteudosTratado.forEach(conteudo => conteudo.classList.add("escondido"));
    
    // Mostra o tratado correspondente
    const idTratado = botao.getAttribute("data-tratado");
    const tratadoSelecionado = document.getElementById(idTratado);
    
    if (tratadoSelecionado) {
      tratadoSelecionado.classList.remove("escondido");
    }
  });
});
