// 1 ------------------------------------------------------------------------------------------------------------------------------------------------

// let soma = 0
// let numeros = [1,2,3,4,5]

// for(let i = 0; i<numeros.length; i++){
//     soma += numeros[i]
// }

// console.log(soma)

// 2 ------------------------------------------------------------------------------------------------------------------------------------------------

// function fatorial(n){
//     let resultado = 1
//     for(let i = n; i > 0; i--){
//         resultado *= i
//         console.log(`i: ${i} \n resultado: ${resultado}`)
//     }
//     return(resultado)
// }
// console.log(fatorial(5))

//  entrada    saida
//     0         1

//     1         1
//     2         2
//     3         6
//     4        24
//     5        120


// entrada 5:

//     i       resultado  it
//     5           5      1
//     4          20      2
//     3          60      3
//     2          120     4
//     1          120     5

// 3 ------------------------------------------------------------------------------------------------------------------------------------------------

// let numeros = [1,2,3,4,5,6]
// let somaPares = 0

// for(let i = 0; i < numeros.length; i++){
//     if(numeros[i] % 2 == 0){
//         somaPares += numeros[i]
//         console.log(`somaPares: ${somaPares} i: ${i}`)
//     }else{
//         console.log("nao é par")
//     }
  
// }

// console.log(somaPares)

// 3.2 -----------------------------------------------------------------------------------------------------------------------------------------------

// function jogoPontuacao(jogadas){
//     let pontuacao = 0
//     for(let i = 0; i < jogadas.length; i++){
//         if(jogadas[i] == "ganhou"){
//             pontuacao += 3
//         }else if(jogadas[i] == "empatou"){
//             pontuacao += 1
//         }else if(jogadas[i] == "perdeu"){
//             pontuacao -= 1
//         }
//     }
//     return pontuacao
// }

// let resultadoFinal = jogoPontuacao(["ganhou","perdeu","ganhou","empatou","perdeu","ganhou"]) // 8
// alert(`resultado : ${resultadoFinal}`)