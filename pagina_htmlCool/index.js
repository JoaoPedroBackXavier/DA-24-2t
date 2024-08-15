let botao = document.getElementById('botãoClicavel');
let texto = document.getElementById('contador');

let contador = 0

botao.addEventListener("click", function() {
    contador += 1
    texto.textContent = contador
});