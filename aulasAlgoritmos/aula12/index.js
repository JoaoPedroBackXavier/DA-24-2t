// let estomago = 0
// while(estomago < 101){
//     alert("coxinhaaaaaaaaaaaaa")
//     estomago ++
// }

// ------------------------------------

// let N1 = 0
// let aux = 1
// while(aux!=0){
//     aux = Number(prompt("digite um numero"))
//     N1 = N1 + aux
// }
// alert(N1)

// ------------------------------------------------

// let c = 1

// do{
//     console.log("o valor do contador é:", c)
//     c ++
// }while(c < 11)

// ------------------------------------------------

// const numeros = [49, 93, 14, 8, 92, 75, 23, 28]
// for(let i = 0; i < 8; i++){
//     console.log(numeros[i])
// }

// -------------------------------------------------

// const array =[20,11,15,18,14,12,13,21]
// let Numeros=0
// let maiorNumero = 0
// for(let i=0; i<=array.length-1; i++){
//     if(maiorNumero < array[i]){
//         maiorNumero=array[i]
//     }
//     if((array[i] % 2)==0){
//         Numeros = Numeros + array[i]
//     }
// }
// alert(maiorNumero)
// alert(Numeros)

// -------------------------------------------------

// const numeros =[14,67,89,15,23]

// for(let numero of numeros){
//     alert(numero)
// }

// --------------------------------------------------------

// let mensagem = ""
// const palavras = ["oi", "sumido", "tudo", "bem"]
// for(let palavra of palavras){
//     mensagem = mensagem + palavra + " "
// }
// alert(mensagem)

// ------------------------------------------------------------

let palavras = ["coisas", "mouse", "string", "oi", "pneumoultramicroscopicosilicovulcanoconiotico"]
let palavraMaisLonga = ""
for(palavra of palavras){
    if((palavraMaisLonga.length) < (palavra.length)){
        palavraMaisLonga = palavra
    }
}
alert(palavraMaisLonga)