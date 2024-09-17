// 1

// matheus
// virginia
// canal brasil

// 2
// a
// juca juba jubo

// b
// copia o objeto referido

// 3
// a
// false undefined

// b 
// porque essa proprie dade nao foi definida

// 1
// a

// pessoa = {
//     nome:"pessoa",
//     apelidos:[
//         "TheGamer",
//         "gamer",
//         "fulano"
//     ],
// }

// function funcion(objeto){
//     alert(`meu nome é ${pessoa.nome} mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
// }

// b

// let pessoa2 = {
//     ...pessoa,
//     apelidos:[
//         "apelidoCool",
//         "pelidoCool",
//         "elidoCool"
//     ],
// }

// 2
// a

// let trabalhador = {
//     nome: "zé",
//     idade: 35,
//     trabalho: 'predeiro',
// }
// let trabalhadorPior = {
//     nome: "fulano",
//     idade: 47,
//     trabalho: "servente de predeiro",
// }

// function pulverizadorDeTrabalhador(trabalhador){
//     return [trabalhador.nome, trabalhador["nome"].length(), trabalhador.idade, trabalhador.trabalho, trabalhador["trabalho"].length()]
// }

// 3
// a

// let carrinho = []

// b

// let maca = {
//     nome:"maça",
//     disponibilidade: true,
// }
// let banana = {
//     nome:"banana",
//     disponibilidade: true,
// }
// let laranja = {
//     nome:"laranja",
//     disponibilidade: true,
// }

// c

// function botarNoCarrinho(fruta){
//     carrinho.push(fruta)
// }
// botarNoCarrinho(maca)
// botarNoCarrinho(banana)
// botarNoCarrinho(laranja)

// d

// console.log(carrinho)

// desafios --------------------------------------------------------------------------------------------------------------------------

// 1

// pessoa = {
//     nome : prompt("qual seu nome?"),
//     idade : Number(prompt("qual sua idade?"))
// }
// console.log(pessoa)
// alert(typeof(pessoa))

// 2

// let filme1 = {
//     data: 1997,
//     nome: "deVoltaParaOFuturo"
// }
// let filme2 = {
//     data: 2015,
//     nome: "mumia"
// }

// function filmeMaisNovo(f1,f2){
//     if(f1.data > f2.data){
//         return `o filme 1 é mais novo`
//     }else if(f1.data < f2.data){
//         return `o filme 2 é mais novo`
//     }
// }
// alert(filmeMaisNovo(filme1,filme2))

// 3

// function indisponibilizar(fruta){
//     fruta.disponibilidade = false
//     return fruta
// }

// desafios especiais  -----------------------------------------------------------------------------------------

// let tradicao1 = {
//     nome:"nome1",
//     saudar:function(){
//         alert("tradicao de tomar chimarrao é legal")
//     },
// }
// let tradicao2 = {
//     nome:"nome2",
//     saudar:function(){
//         alert("tradicao de usar bombacha é legal")
//     },
// }
// let tradicao3 = {
//     nome:"nome3",
//     saudar:function(){
//         alert("tradicao de comer pinhao é legal")
//     },
// }
// let tradicao4 = {
//     nome:"nome4",
//     saudar:function(){
//         alert("tradicao de falar cacetinho é legal")
//     },
// }
// let tradicoes = [
//     tradicao1,
//     tradicao2,
//     tradicao3,
//     tradicao4,
// ]

// function exibirTradicao(arai){
//     for(trad of arai){
//         trad.saudar()
//     }
// }
// exibirTradicao(tradicoes)

