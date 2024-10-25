// const fonsaunLegol = function(msg){
//     alert(msg)
// }
// fonsaunLegol("oioioi")

// const fonsaunLegol2 = (msg) => {
//     alert(msg)
// }
// fonsaunLegol("oioioi")

// -------------------------------------------------------------------

// exercicios do inter

// 1.
// a. 10
//    50

// b. nada ou erro

// 2.
// a. verifica se tem cenoura em uma string mesmo se maiuscula ou minuscula
// b. true true false

// ----------------------------------------------------------------------------------

// exercicios de escritura

// 1.
// a.

// function apresentation(){
//     alert("oi sou o gamer")
// }

// 2.

// a.
// function soma(N1,N2){
//     return N1 + N2
// }
// alert(soma(1,1))

// b.
// function eMaiorOuIgual(N1,N2){
//     return N1 >= N2
// }
// alert(eMaiorOuIgual(8547,637846))

// c. 
// function ePar(N1){
//     if ((N1%2)==0){
//         return true
//     }else{
//         return false
//     }
// }
// alert(ePar(3463754523123456235322))

// d.
// function lenteEMin(str){
//     alert(`o tamanho é ${str.length} e em minusculo é ${str.toLowerCase()}`)
// }
// lenteEMin(prompt("digite"))

// 3.

// function soma (N1,N2){
//     alert(` a soma é : ${N1+N2}`)
// }
// function diferenca (N1,N2){
//     alert(`a diferença é: ${N1-N2}`)
// }
// function veses (N1,N2){
//     alert(`veses é: ${N1*N2}`)
// }
// function divisão (N1,N2){
//     alert(`divsão é: ${N1/N2}`)
// }

// let r1 = Number(prompt("digite um numero inteiro"))
// let r2 = Number(prompt("digite another one"))

// alert(`os numeros são ${r1} e ${r2}`)
// soma(r1,r2)
// diferenca(r1,r2)
// veses(r1,r2)
// divisão(r1,r2)

// chalanges 100/100 :fire: :fire: :skull: :fire: :fire:

// desafio 1
// a.
// let meuAlert = (str) => {
//     alert(str)
// }
// b.
// let soma = (N1,N2) => {
//     meuAlert(N1 + N2)
// }
// soma(10,10)

// desfio 2 (very cool)

// let bolsa = []
// function adicionarItem(inventario){
//     inventario.push(prompt("digite o item"))
// }
// function excluirItem(inventario,indice){
//     inventario.slice(indice,1)
// }
// function listar(inventario){
//     aux = ""
//     for(item of inventario){
//         aux = aux + (item+"\n")
//     }
//     alert (aux)
// }
// let cond1 = true
// let r = ""
// while (cond1){
//     r = prompt("adicionar item(1), excluir item(2), listar(3)")
//     if (r==1){
//         adicionarItem(bolsa)
//         listar(bolsa)
//     }else if(r == 2){
//         r = Number(prompt("qual item?"))-1
//         excluirItem(bolsa,r)
//         listar(bolsa)
//     }else if(r == 3){
//         listar(bolsa)
//     }else{
//         cond1=false
//     }
// }
