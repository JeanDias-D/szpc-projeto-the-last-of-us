// Passo 1 Dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//Passo 2 Dar um jeito de identificar o clique do usuario no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () =>{
        //Passo 3 Desmarcar o botão selecionado anterior
        desmacarBotaoSelecionado();

        //Passo 4 Marcar o botão clicado como se estivesse selecionado
        botao.classList.add('selecionado');

        //Passo 5 Esconder a imagem ativa de fundo
        esconderImagemAtiva(); 

        //Passo 6 Fazer aparecer a imagem de fundo correspondente ao botão clicado
        imagens[indice].classList.add('ativa');
    })
})
function desmacarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

