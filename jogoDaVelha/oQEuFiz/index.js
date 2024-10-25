let tabuleiro = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
]

function mostrarTabuleiro(){
    let aux = ""
    for(let i = 0; i<3; i++){
        for(let q = 0; q<3; q++){
            aux += tabuleiro[i][q] + "  "
        }
        aux += "\n"
    }
    console.log(aux)
}
// lista o tabuleiro


function botar1(){
    let rl = Number(prompt("qual linha do 1"))
    let rc = Number(prompt("qual coluna do 1"))
    if(tabuleiro[rl][rc] != 0){
        alert("ai ja tem")
    }else {
        tabuleiro[rl][rc] = 1
    }
}
// nada de dificil de entender

function botar2(){
    let rl = Number(prompt("qual linha do 2"))
    let rc = Number(prompt("qual coluna do 2"))
    if(tabuleiro[rl][rc] != 0){
        alert("ai ja tem")
    }else {
        tabuleiro[rl][rc] = 2
    }
}


function verificarLinha1(){
    for(let i = 0; i < tabuleiro.length; i++){
        if((tabuleiro[i][0]==1)&&(tabuleiro[i][1]==1)&&(tabuleiro[i][2]==1)){
            return true
        }else{
            return false
        }
    }
}
// verifica a vitoria do 1 nas tres linhas
function verificarLinha2(){
    for(let i = 0; i < tabuleiro.length; i++){
        if((tabuleiro[i][0]==2)&&(tabuleiro[i][1]==2)&&(tabuleiro[i][2]==2)){
            return true
        }else{
            return false
        }
    }
}

function verificarColuna1(){
    for(let q = 0; q < tabuleiro.length; q++){
        if((tabuleiro[0][q]==1)&&(tabuleiro[1][q]==1)&&(tabuleiro[2][q]==1)){
            return true
        }else{
            return false
        }
    }
}
// verifica a vitoria do 1 nas tres colunas
function verificarColuna2(){
    for(let q = 0; q < tabuleiro.length; q++){
        if((tabuleiro[0][q]==2)&&(tabuleiro[1][q]==2)&&(tabuleiro[2][q]==2)){
            return true
        }else{
            return false
        }
    }
}

function verificarDiagonais1(){
    if((tabuleiro[0][0]==1)&&(tabuleiro[1][1]==1)&&(tabuleiro[2][2]==1)){
        return true
    }else if((tabuleiro[0][2]==1)&&(tabuleiro[1][1]==1)&&(tabuleiro[2][0]==1)){
        return true
    }else{
        return false
    }
}
// aqui eu fiz casos pré determinados mesmão
function verificarDiagonais2(){
    if((tabuleiro[0][0]==2)&&(tabuleiro[1][1]==2)&&(tabuleiro[2][2]==2)){
        return true
    }else if((tabuleiro[0][2]==2)&&(tabuleiro[1][1]==2)&&(tabuleiro[2][0]==2)){
        return true
    }else{
        return false
    }
}

function verificarTabuleiro(){
    if( verificarLinha1() || verificarColuna1() ||  verificarDiagonais1() ){
        return [true, "1"]
    }else if( verificarLinha2() ||verificarColuna2() || verificarDiagonais2()){
        return [true, "2"]
    }else{
        return false
    }
}


let aux1 = true
// quando aux 1 virar false o loop para
while(aux1){
    let aux2 = ""

    alert("vez do 1")

    botar1()

    aux2 = verificarTabuleiro()[1]
    // a funçao retorna um array com se alguem venceu (booleano indice 0) e quem venceu (string e indice 1)
    if(verificarTabuleiro()[0]){
        mostrarTabuleiro()
        alert(`${aux2} é o vencedor`)
        aux1 = false
        break
    // eu botei o break pra o jogo termina antes do 2 botar de novo
    }else{
    }

    mostrarTabuleiro()

    alert("vez do 2")

    botar2()

    aux2 = verificarTabuleiro()[1]
    if(verificarTabuleiro()[0]){
        mostrarTabuleiro()
        alert(`${aux2} é o vencedor`)
        aux1 = false
        break
    }else{
    }

    mostrarTabuleiro()
}


