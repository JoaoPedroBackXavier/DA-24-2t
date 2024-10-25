let tipoDeJogo = prompt("tipo de jogo:\n internacional(in)\n domestico(do)\n")
let etapaDeJogo = prompt("etapa de jogo:\n semifinais(SF)\n decisão do 3o lugar(dt)\n final(FL)")
let categoria = prompt("categoria (1, 2, 3 ou 4)")
let quantidadeDeIngressos = Number(prompt("quantidade de ingressos"))
// declaração de variaveis que serão usadas para determinar o preço final

let valorTotal = 0

if(etapaDeJogo == "sf"){
// verifica a etapa de jogo

    if(categoria == "1"){
//  verifica a categoria
        valorTotal = 1320
// valor total que sera atualizado depois
    }else if(categoria == "2"){
        valorTotal = 880
    }else if(categoria == "3"){
        valorTotal = 550
    }else if(categoria == "4"){
        valorTotal = 220
    }else{
//  caso o usuario digitou errado:
        alert("erro de digitação")
    }

}else if(etapaDeJogo == "dt"){

    if(categoria == "1"){
        valorTotal = 660
    }else if(categoria == "2"){
        valorTotal = 440
    }else if(categoria == "3"){
        valorTotal = 330
    }else if(categoria == "4"){
        valorTotal = 170
    }else{
        alert("erro de digitação")
    }

}else if(etapaDeJogo == "fl"){

    if(categoria == "1"){
        valorTotal = 1980
    }else if(categoria == "2"){
        valorTotal = 1320
    }else if(categoria == "3"){
        valorTotal = 880
    }else if(categoria == "4"){
        valorTotal = 330
    }else{
        alert("erro de digitação")
    }

}else{
    alert("erro de digitação")
}

valorTotal = valorTotal*quantidadeDeIngressos
// faz o preço ser multiplicado pela quantidade de ingressos

if(tipoDeJogo == "in"){
    valorTotal = valorTotal/5.65
// converte para dolar
    alert(`o valor total deu ${Math.floor(valorTotal)} dolares para etapa ${etapaDeJogo} e categoria ${categoria}`)
// math.floor faz o valor arredondar
}else if(tipoDeJogo == "do"){
    alert(`o valor total deu ${Math.floor(valorTotal)} reaols para etapa ${etapaDeJogo} e categoria ${categoria}`)
}else{
    alert("erro de digitação")
}