let historico = ""

    let aux1 = true
    let aux2 = true
    let aux3 = ""
    let aux4 = 1000
    let r = ""
    let r2 = ""

let personagens = []
let lojinha = [
    {nome: "adaga", tipo: "arma", preco: 50, disponibilidade: true,},
    {nome: "escudo leve", tipo: "arma", preco: 150, disponibilidade: true},
    {nome: "armadura leve", tipo: "armadura", preco: 225, disponibilidade: true},
    {nome: "armadura pesada", tipo: "armadura", preco: 300, disponibilidade: true},
    {nome: "espada de duas maos", tipo: "arma", preco: 175, disponibilidade: true},
    {nome: "bolsa magica", tipo: "item", preco: 500, disponibilidade: true},
    {nome: "amuleto da sorte", tipo: "item", preco: 1000, disponibilidade: true},
]

function listar(array){
    for(personagem of array){
        aux3=aux3+(`id: ${personagem.id} | nome: ${personagem.nome} | classe: ${personagem.classe} | nivel: ${personagem.nivel} | hp: ${personagem.hp} | pts: ${personagem.pontuacao}`) + "\n"
    }
    console.log(aux3+ "\n-----------------------------------------------------------------------------------------")
    aux3=""
}

function adicionar(array){
    let personagemAux = {}
    if (personagens.length > 0){
        personagemAux = {
            id: array[array.length-1].id+1,
            nome: prompt("qual vai ser o nome do personagem?"),
            classe: prompt("qual vai ser a classe dele?"),
            nivel: 0,
            hp: 10,
            pontuacao: 0,
            inventario: []
        }
    }else{
        personagemAux = {
            id: 1,
            nome: prompt("qual vai ser o nome do personagem?"),
            classe: prompt("qual vai ser a classe dele?"),
            nivel: 0,
            hp: 10,
            pontuacao: 0,
            inventario: []
        }
    }
    array.push(personagemAux)
}

function mostrarPontos(idDoPersonagem){
    let personagemm = (personagens.find(person => person.id === idDoPersonagem))
    console.log(`personagem: ${personagemm.nome} | pontos: ${personagemm.pontuacao}`)
}

function ganharPontos(pontos,idDoPersonagem){
    let personagemm = personagens.find(person => person.id === idDoPersonagem)
    personagemm.pontuacao += pontos
    if(pontuacao >= aux4){
        personagemm.nivel += 1
        aux4 = aux4+1000
        personagemm.pontuacao = 0
        mostrarPontos(idDoPersonagem)
    }
}

function comprar(idDoPersonagem,itemm){
    let person = personagens.find(person => person.id == idDoPersonagem)
    (person.inventario).push(lojinha.find(item => item.nome == itemm))
}

while (aux1){
    r = prompt("editar personagens(1), selecionar personagem(2)?")
    if(r=="1"){
        aux2 = true
        while(aux2){
            listar(personagens)
            r2=prompt("excluir(1) ou adicionar(2)?")
            if(r2=="1"){
                personagens.pop()
            }else if(r2=="2"){
                adicionar(personagens)
            }else{
                aux2 = false
                alert("fechando editor")
            }

        }
    }else if(r == "2") {
        let idSelecionado = Number(prompt("qual o id do personagem?"))
        let selecionado = personagens.find(person => person.id == idSelecionado)
        if(selecionado) {
            console.log(`personagem ${selecionado.nome} selecionado \n-----------------------------------------------------------------------------------------`)

        }else{
            console.log("Personagem não encontrado. \n-----------------------------------------------------------------------------------------")
        }     
    }else{
        aux1=false
        alert("fechando programa")
    }
}
