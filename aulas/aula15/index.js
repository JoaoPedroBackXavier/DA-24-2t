// function area(largura,altura){
//     return largura * altura
// }
// let respostas = [Number(prompt("altura: \n")), Number(prompt("largura: \n"))]
// alert(area(respostas[0],respostas[1]))

// exercicios -------------------------------------------------------------------------

// quadro 1

// function mensagem(){
//     alert("bem vindo 24-2T!")
// }

// function mostrarSoma(N1,N2){
//     alert(`a soma é: ${N1+N2}`)
// }

// function mostrarDobro(N1){
//     alert(`o numero ${N1} veses dois é ${N1*2}`)
// }

// ---------------------------------------------------------------------------------

// quadro 2

// function cumprimento(Nome){
//     alert(`ola ${Nome}`)
// }
// cumprimento(prompt("qual seu nome"))
// cumprimento(prompt("qual seu nome"))
// cumprimento(prompt("qual seu nome"))

// function soma(N1,N2){
//     alert(`a soma da ${N1+N2}`)
// }
// soma(1,2)

// -----------------------------------------------------------------------------------

// atividade cool

// function henrique(){
//     alert("oi Henrique, vai um cafézinho ai?")
// }
// henrique()

// -----------------------------------------------------------------------------------

// quadro 3

// function soma(N1,N2){
//     return N1 + N2
// }
// alert(soma(1,1))

// arrayCoal=[1,2,3,4,5,6,7,8,9]
// function primeiroEUltimo(Array){
//     aux = [(Array[0])/2, (Array[Array.length-1])/2]
//     return aux
// }
// alert(primeiroEUltimo(arrayCoal))

// ---------------------------------------------------------------------------------------------

// const calcularArea = function(largura,altura){
//     const soma = largura*altura
//     return soma
// }
// const resultado = calcularArea(2,5)

// const imprimirNome = function(nome){
//     alert("bem vindo", nome)
// }
// imprimirNome("rebeca")

// const calcularArea = (N1,N2) => {
//     const area = N1 * N2
//     return area
// }
// const area = calcularArea(2,7)
// alert(area)

// -------------------------------------------------------------------------

// re-quadro 2

// const cumprimento = function(Nome){
//     alert(`ola ${Nome}`)
// }
// cumprimento(prompt("qual seu nome"))
// cumprimento(prompt("qual seu nome"))
// cumprimento(prompt("qual seu nome"))

// const soma = function(N1,N2){
//     alert(`a soma da ${N1+N2}`)
// }
// soma(1,2)

// ----------------------------------------------------------------------------

// re-quadro 3

// const soma = (N1,N2) => {
//     return N1 + N2
// }
// alert(soma(1,1))

// arrayCoal=[1,2,3,4,5,6,7,8,9]
// const primeiroEUltimo = (Array) => {
//     aux = [(Array[0])/2, (Array[Array.length-1])/2]
//     return aux
// }
// alert(primeiroEUltimo(arrayCoal))

// ---------------------------------------------------------------------------------

function determinaMonstro (temPeleGelada,transformaComLuaCheia,brilhaAoSol,temSedeDeSange){
    if (temPeleGelada){
        
        if (temSedeDeSange){
            return "vampirio"
        }
    }else if(transformaComLuaCheia){
        if (temSedeDeSange){
            return "lobi zomem"
        }
    }else if(brilhaAoSol){
        return "homem"
    }
}

alert(determinaMonstro(false,false,true,false))