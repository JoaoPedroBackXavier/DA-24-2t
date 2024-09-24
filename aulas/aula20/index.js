// let matriz = [
//     [1,2,3,4,5,6,7,8,9,],
//     [10,11,12,13,14,15,16,17,18,19]
// ]

// alert(matriz[0][3])

// let matriz = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// alert(matriz)

// let matriz = []
// matriz[0] = [1,2,3]
// matriz[1] = [1,2,3]
// matriz[2] = [1,2,3]

// alert(matriz)
// let matriz = []

// let matriz = [
//     [0,0,0,"\n"],
//     [0,0,0,"\n"],
//     [0,0,0]
// ]

// matriz[1][2] = 1

// alert (matriz)

// matriz = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// for(let i=0;i<matriz.length;i++){

//     for(let j=0; j<matriz[i].length; j++){
//         alert(matriz[i][j])
//     }
// }

// let soma = 0
// let matriz = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// for(let i=0;i<matriz.length;i++){

//     for(let j=0; j<matriz[i].length; j++){
//         soma += matriz[i][j]
//     }
// }
// alert(soma)

// soma = 0
// let matriz = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ]

// for(let i=0;i<matriz.length;i++){

//     for(let j=0; j<matriz[i].length; j++){
//         soma += matriz[i][j]
//     }
// }
// alert(soma)

// soma = 0
// let matriz = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ]

// for(let i=0;i<matriz.length;i++){

//     for(let j=0; j<matriz[i].length; j++){
//         soma += matriz[i][j]
//     }
// }
// alert(soma)



let tabuleiro = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
]

let aux2 = ""
function verNavios(){
    for(let i=0;i<tabuleiro.length;i++){
        for(let j=0; j<tabuleiro[i].length; j++){
            aux2 = aux2 + String(tabuleiro[i][j]) + " "
        }
        aux2 = aux2+"\n"
    }
    console.log(aux2)
    aux2 = ""
}

function colocarNavio(){
    let r1 = Number(prompt("qual a linha do navio?"))
    let r2 = Number(prompt("qual a coluna do navio?"))
    if(tabuleiro[r1-1][r2-1] == 0){
        tabuleiro[r1-1][r2-1] = 1
        verNavios()
    }else{
        alert("quadrado indisponivel")
    }
}

function atirar(){
    let r1 = Number(prompt("qual a linha do tiro?"))
    let r2 = Number(prompt("qual a coluna do tiro?")) 
    if(tabuleiro[r1-1][r2-1] == 1){
        tabuleiro[r1-1][r2-1] = 0
        alert("acertou")
        verNavios()
    }else{
        alert("errou")
    }
}

let aux = true
verNavios()
while (aux){
    let r = (prompt("atirar(a) colocar navio(cn) ou enter para parar"))
    if(r=="a"){
        atirar()
    }else if(r=="cn"){
        colocarNavio()
    }else{
        alert("saindo")
        aux = false
    }
}






// jogo da velha -----------------------------------------------------------------------------------------------------------
// soma = 0

// function verificarlinha(linha,matrizz){
//     if((matrizz[linha][0] == 1) && (matrizz[linha][1] == 1) && (matrizz[linha][2] == 1)){
//         return true
//     }
// }

// let matriz = [
//     [0,0,0],
//     [0,0,0],
//     [0,0,0]
// ]

// for(let i=0;i<matriz.length;i++){

//     for(let j=0; j<matriz[i].length; j++){
//         soma += matriz[i][j]
//     }
// }
// alert(soma)