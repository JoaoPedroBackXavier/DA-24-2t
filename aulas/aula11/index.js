let tipoDeJogo = prompt("tipo de jogo:\n internacional(in)\n domestico(do)\n")
let etapaDeJogo = prompt("etapa de jogo:\n semifinais(SF)\n decisão do 3o lugar(dt)\n final(FL)")
let categoria = prompt("categoria (1, 2, 3 ou 4)")
let quantidadeDeIngressos = Number(prompt("quantidade de ingressos"))

let valorTotal = 0

function listarArray(array){
    for(elemento of array){
        let aux = aux + elemento + '\n'
    }
}

if(etapaDeJogo == "sf"){

    if(categoria == "1"){
        valorTotal = 1320
    }else if(categoria == "2"){
        valorTotal = 880
    }else if(categoria == "3"){
        valorTotal = 550
    }else if(categoria == "4"){
        valorTotal = 220
    }else{
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

if(!(isNaN(quantidadeDeIngressos)))
valorTotal = valorTotal*quantidadeDeIngressos

if(tipoDeJogo == "in"){
    valorTotal = valorTotal/5.65
    alert(`o valor total deu ${Math.floor(valorTotal)} dolares para etapa ${etapaDeJogo} e categoria ${categoria}`)
}else if(tipoDeJogo == "do"){
    alert(`o valor total deu ${Math.floor(valorTotal)} reaols para etapa ${etapaDeJogo} e categoria ${categoria}`)
}else{
    alert("erro de digitação")
}