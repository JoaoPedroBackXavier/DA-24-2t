// let array
// console.log('a. ', array)
// array = null
// console.log('b. ', array)
// array = [3,4,5,6,7,8,9,10,11,12,13]
// console.log('c. ', array)
// let i = 0
// console.log('d. ', array[i])
// array[i+1] = 10
// console.log('e. ', array)
// const valor = array[i+6]
// console.log('f. ', valor)

// const frase = prompt("digite uma frase")
// console.log(frase.toUpperCase().replaceAll("A","I"), frase.length)

// qual sera a saida se a entrada for "socorram-me subi no onibus em marrocos"
// SOCORRIM-ME SUBI NO ONIBUS EM MIRROCOS

// let emailDoUsuario = prompt("qual seu email?")
// let nomeDoUsuario = prompt("qual seu nome?")
// console.log(`o email ${emailDoUsuario} foi cadastrado juntamente ao nome ${nomeDoUsuario}`)

// comidas = [
//     "sushi \n",
//     "frutas \n",
//     "fejão com arroz \n",
//     "carne \n",
//     "café \n",
// ]
// alert(`minhas comidas preferidas são ${comidas}`)
// comidas[1] = prompt("qual sua comida mais preferida")
// alert(`${comidas}`)

let array=[]
let listaDeTarefas = array
array.push(prompt("fale uma tarefa de hoje"))
array.push(prompt("fale uma tarefa de hoje"))
array.push(prompt("fale uma tarefa de hoje"))
array.splice(Number(prompt("qual tarefa voce ja fez?")) - 1)
alert(listaDeTarefas)





