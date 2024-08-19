document.addEventListener('DOMContentLoaded', () =>{
    // Obtém o visor e os botões
    const visorTexto = document.getElementById('visorTexto');
    const botoes = document.querySelectorAll('#container button');

    // Adiciona um listener de evento de clique a cada botão
    botoes.forEach(botao => {
        botao.addEventListener('click', (event) => {
            // Obtém o valor do botão clicado
            const valor = event.target.getAttribute('data-value');
            alert(valor)
            // Atualiza o visor com o valor clicado
            visorTexto.textContent += valor;
        });
    });
})