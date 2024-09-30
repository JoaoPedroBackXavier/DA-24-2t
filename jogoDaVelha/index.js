let tabuleiro = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
]

function botar1(){
    let rl = Number(prompt("qual linha do 1"))
    let rc = Number(prompt("qual coluna do 1"))
    if(tabuleiro[rl][rc] != 0){
        alert("ai ja tem")
    }else {
        tabuleiro[rl][rc] = 1
    }
}

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
function verificarDiagonais2(){
    if((tabuleiro[0][0]==2)&&(tabuleiro[1][1]==2)&&(tabuleiro[2][2]==2)){
        return true
    }else if((tabuleiro[0][2]==2)&&(tabuleiro[1][1]==2)&&(tabuleiro[2][0]==2)){
        return true
    }else{
        return false
    }
}


function verificarColuna1(){}

let aux1 = true
while(aux1){
    alert("vez do 1")
    botar1()
}


