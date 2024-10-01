let tabuleiro = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let jogadorAtual = 'X';
let jogoAtivo = true;

function mostrarTabuleiro() {
    console.clear();
    console.log(tabuleiro.map(row => row.join(' | ')).join('\n---------\n'));
}

function fazerJogada(linha, coluna) {
    if (tabuleiro[linha][coluna] === '' && jogoAtivo) {
        tabuleiro[linha][coluna] = jogadorAtual;
        verificarVencedor();
        jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
        mostrarTabuleiro();
    } else {
        console.log("Espaço inválido ou o jogo já acabou!");
    }
}

function verificarVencedor() {
    // Verifica linhas e colunas
    for (let i = 0; i < 3; i++) {
        if (tabuleiro[i][0] && tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][0] === tabuleiro[i][2]) {
            console.log(`Jogador ${tabuleiro[i][0]} é o vencedor!`);
            jogoAtivo = false;
            return;
        }

        if (tabuleiro[0][i] && tabuleiro[0][i] === tabuleiro[1][i] && tabuleiro[0][i] === tabuleiro[2][i]) {
            console.log(`Jogador ${tabuleiro[0][i]} é o vencedor!`);
            jogoAtivo = false;
            return;
        }
    }

    // Verifica diagonais
    if (tabuleiro[0][0] && tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[0][0] === tabuleiro[2][2]) {
        console.log(`Jogador ${tabuleiro[0][0]} é o vencedor!`);
        jogoAtivo = false;
        return;
    }

    if (tabuleiro[0][2] && tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[0][2] === tabuleiro[2][0]) {
        console.log(`Jogador ${tabuleiro[0][2]} é o vencedor!`);
        jogoAtivo = false;
        return;
    }

    // Verifica empate
    if (tabuleiro.flat().every(celula => celula !== '')) {
        console.log("Empate!");
        jogoAtivo = false;
    }
}

// Função principal para o jogo
function jogar() {
    mostrarTabuleiro();
    while (jogoAtivo) {
        const linha = prompt(`Jogador ${jogadorAtual}, escolha a linha (0, 1 ou 2):`);
        const coluna = prompt(`Jogador ${jogadorAtual}, escolha a coluna (0, 1 ou 2):`);
        fazerJogada(Number(linha), Number(coluna));
    }
}

// Inicia o jogo
jogar();
