const asas = document.querySelector('.asas');
const conteudo = document.querySelector('.conteudo');

// Função para abrir as asas e mostrar o conteúdo
function abrirAsas() {
    asas.style.transform = 'translateX(100%)';
    conteudo.style.opacity = 1;
}

// Chamar a função após um determinado tempo ou em um evento específico
setTimeout(abrirAsas, 2000); // Abre as asas após 2 segundos