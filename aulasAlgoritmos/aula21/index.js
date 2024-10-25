// exercicios de fixação

// 1
// vai cer impresso 16 por que ele ta na posição [2][1]

// 2
// imprime os numeros que o resto da divisão por 2 é igual a zero porque ele ta percorrendo cada elemento dos 3 arrays de dentro e executando o mesmo codigo

// 3
// a variavel soma ta recebendo o valor de cada elemento um por um


// escrita
// 1

                        function aleatorio(min, max) {
                          return Math.floor(Math.random()*(max-min+1)) + min;
                        }
// vou usar essa função nos proximos exercicios

// let mapa = [
//     [0,0,0,0,0],
//     [0,0,0,0,0],
//     [0,0,0,0,0],
//     [0,0,0,0,0],
//     [0,0,0,0,0]
// ]

// for(let i = 0; i<mapa.length; i++){
//     for(let q = 0; q<mapa[i].length; q++){
//         mapa[i][q] = aleatorio(0,2)
//     }
// }

// let aux = ""
// for(let i = 0; i<mapa.length; i++){
//     for(let q = 0; q<mapa[i].length; q++){
//         aux += String(mapa[i][q]) + "    "
//     }
//     aux += "\n"
// }
// alert(aux)

// 2

// let pontos = [
//     [0,1,0],
//     [2,2,4],
//     [1,4,2],
//     [3,4,2]
// ]

// let pessoa1 = 0
// let pessoa2 = 0
// let pessoa3 = 0
// for(let i = 0; i<pontos.length; i++){
//     pessoa1 += pontos[i][0]
//     pessoa2 += pontos[i][1]
//     pessoa3 += pontos[i][2]
// }
// alert(`pessoa1 ${pessoa1} pessoa2 ${pessoa2} pessoa3 ${pessoa3}`)

// 3

// let array = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,14,15],
// ]
// alert(array[0]+"\n"+array[1]+"\n"+array[2]+"\n"+array[3]+"\n")

// for(let i = 0; i < array.length; i++){
//   for(let q = 4; q > 0; q--){
//         array[i].push(array[i][q-1])
//   }
//   array[i].splice(0,4)
// }

// alert(array[0]+"\n"+array[1]+"\n"+array[2]+"\n"+array[3]+"\n")
// // eu poderia fazer com .reverse mas eu preferi um desafiozinho



