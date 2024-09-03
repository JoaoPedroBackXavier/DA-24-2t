// 1 -

// let valor = 0
// for(let i=0;i<5;i++){
// valor += 1
// }
// console.log(valor)

// o que ese codigo faz?

// adiciona 1 á variavel valor, 5 veses

// 2 -

// const lista =[10,11,12,15,18,19,21,23,25,27,30]
// for(let numero of lista){
//  if (numero > 18) {
//      console.log(numero)
//  }
// }

// o que vai ser empresso no console?

// 19 21 23 25 27 30

// se eu quisesse acessar o indice de cada elemento, o farofe iria bastar?

// com meus conhecimentos atuais, não

// 3 -

// qual seria o resultado se o usuario digitasse 4 

// const quantidadeTotal = Number(prompt("digite a quantidade de linhas"))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//  let linha = ""
//  for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos ++){
//      linha += "*"
//  }
//  console.log(linha)
//  quantidadeAtual++
// }

// seria ****

// 4 -

// let NoBichos = Number(prompt("quantos pets você possui? \n"))
// let bichos = []
// if(NoBichos == 0){
//     alert("que pena, você nao tem pet")
// }else if(NoBichos > 0){
//     while (NoBichos > 0){
//         bichos.push(prompt("qual o nome do proximo bicho?"))
//         NoBichos --
//     }
// }else{
//     alert("digite um numero inteiro positivo")
// }
// alert(bichos)

// 5 -

// let arrayOriginal = [1,2,3,4,5,6,7,8,9,0]

// function alertTodos(array){
//     for(elemento of array){
//         alert(elemento)
//     }
// }

// function alertTodosDiv10(array){
//     for(elemento of array){
//         alert(elemento/10)
//     }
// }

// function alertTodosPares(array){
//     let arrayNovo = []
//     for(elemento of array){
//         if ((elemento%2)==0){
//             arrayNovo.push(elemento)
//         }
//     }
//     alert(arrayNovo)
// }

// function alertarStrings(){
//     let Strings = [" 8"," du"," bem,"," como"," vai"]
//     for(let i=0; i < Strings.length; i++){
//         alert(`o elemento index ${i} é: ${Strings[i]}`)
//     }
// }

// function AlertMaiorEMenorNumero(array){
//     let maior = 0
//     for(numero of array){
//         if (numero > maior){
//             maior = numero
//         }
//     }
//     let menor = maior
//     for(numero of array){
//         if (menor > numero){
//             menor = numero
//         }
//     }
//     alert(`maior é ${maior} menor é ${menor}`)
// }
// alert("todos elementos :")
// alertTodos(arrayOriginal)
// alert("agora divididos por 10: ")
// alertTodosDiv10(arrayOriginal)
// alert("agora os pares: ")
// alertTodosPares(arrayOriginal)
// alert("agora o maior e menor elemento do array: ")
// AlertMaiorEMenorNumero(arrayOriginal)
// alert("agora elementos de um outro array:")
// alertarStrings()

// --------------------------------------------------------------------------------------

// desafio 1, 2 e 3 -

function gerarNumeroInteiroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
if(prompt("desafio 2 ou 3?")==2){
    let random = gerarNumeroInteiroAleatorio(0, 100)
    let aux = true
    alert("let us play")
    let NoTentativas = 0
    while(aux){
        NoTentativas ++
        let tentativa = Number(prompt("chute um numero entre 0 e 100\n"))
        if(tentativa == random){
            alert(`você acertou, o numero de tentativas foi ${NoTentativas}`)
            aux = false
        }else if(tentativa > random){
            alert("errou! O numero é menor que "+tentativa)
        }else if(tentativa < random){
            alert("errou! O numero é maior que "+tentativa)
        }
    }
}else{
    let vidas = 1
    let recursos = 0
    let aux = true
    let resposta =""
    let aleatorio = 0
    while(aux){
        alert(`seus recursos são ${recursos} e você tem ${vidas} vidas`)
        if(recursos==10){
            alert("você ganhou")
            aux = false
        }
        if(vidas == 0){
            alert("você sangrou até a morte")
            aux=false
        }
        resposta = prompt("você quer explorar(1) ou descançar(2)?")
        if (resposta == "1"){
            aleatorio = gerarNumeroInteiroAleatorio(0, 5)
            if (aleatorio==0){
                alert("você encontrou um gamemaker e ele te deu hs insta kill")
                aux=false
            }
            if (aleatorio==2||(aleatorio==1)){
                vidas --
                alert("você encontrou um perigo e perdeu um de hp, tua vida ta em "+vidas)
            }
            if((aleatorio==3)||(aleatorio==4)||(aleatorio==5)){
                let recursosEncontrados = gerarNumeroInteiroAleatorio(0, 4)
                alert(`você encontrou ${recursosEncontrados} recursos`)
                recursos = recursos+recursosEncontrados
            }
        }else if(resposta == "2"){
            vidas ++
            alert(`você decidiu descansar e sua vida sobe para ${vidas}`)
        }
    }
}
