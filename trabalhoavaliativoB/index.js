// apenas joão pedro back xavier

let historico = ""
let aux1 = true
let aux2 = true
let aux3 = ""
let r = ""
let r2 = ""
let r3 = 0
let r4 = ""
// declaração de variaveis

let personagens = [{id:1,nome:"Pippin",classe:"rogue",nivel:1,hp:5,habilidade:"enxer o saco"},{id:2,nome:"Merry",classe:"rogue",nivel:1,hp:5,habilidade:"comer"}]
// declaraçoes de arrays

function listar(array){
    for(personagem of array){
        aux3=aux3+(`id: ${personagem.id} | nome: ${personagem.nome} | classe: ${personagem.classe} | nivel: ${personagem.nivel} | hp: ${personagem.hp} | habilidade: ${personagem.habilidade}`) + "\n"
    }
    alert(aux3)
    aux3=""
}
// função que lista os personagens

function adicionar(array){
    let personagemAux = {}
    if (personagens.length > 0){
// verifica se ja tem personagens dentro de personagens a fim do id se referenciar do id anterior
        personagemAux = {
            id: array[array.length-1].id+1,
            nome: prompt("qual vai ser o nome do personagem?"),
            classe: prompt("qual vai ser a classe dele?"),
            nivel: 1,
            hp: Number(prompt("quanto de hp vai ter no teu personagem?")),
            habilidade: prompt("qual a habilidade especial?")
        }
    }else{
        personagemAux = {
            id: 1,
// aqui o id nao tem referencia então ele recebe 1
            nome: prompt("qual vai ser o nome do personagem?"),
            classe: prompt("qual vai ser a classe dele?"),
            nivel: 1,
            hp: Number(prompt("quanto de hp vai ter no teu personagem?")),
            habilidade: prompt("qual a habilidade especial")
        }
    }
    array.push(personagemAux)
// empurra personagem auxiliar para dentro de personagens
}
// função que adiciona personagens

while (aux1){
// assim que aux1 receber false o looping para
    r = prompt("editar personagens(1), usar ação(2), ver historico(3), listar personagens(4) ou enter para fechar?")
    if(r=="1"){
// se a resposta for 1:
        aux2 = true
        while(aux2){
// quando aux2 receber false o looping para
            r2=prompt("excluir(1), adicionar(2) ou enter para fechar?")
            if(r2=="1"){
                personagens.splice(Number(prompt("digite o id do personagem que voce quer deletar."))-1, 1)
// deleta o personagem pedido pelo prompt
            }else if(r2=="2"){
                adicionar(personagens)
// chama a funçao de adicionar personagem
            }else{
                aux2 = false
                alert("fechando editor")
            }

        }
    }else if(r=="2"){
        aux2 = true
        while(aux2){
            r2 = Number(prompt("qual o id do personagem que vai fazer a ação"))
            if(personagens.length==0){
                aux2 = false
                alert(`sem persongens, saindo do menu de açoes`)
// se personagens estiver vazio alerta e para o looping
            }else{
                r4 = prompt("atacar(1), defender(2), especial(3) ou enter para fechar")
                switch (r4){
                    case "1": historico = historico + `${personagens[r2-1].nome} atacou \n` 
                        alert(`${personagens[r2-1].nome} atacou`)
                        aux2 = false
                        break
                    case "2": historico = historico + `${personagens[r2-1].nome} defendeu \n` 
                        alert(`${personagens[r2-1].nome} defendeu`)
                        aux2 = false
                        break
                    case "3": historico = historico + `${personagens[r2-1].nome} deu especial ${personagens[r2-1].habilidade}\n` 
                        alert(`${personagens[r2-1].nome} deu especial ${personagens[r2-1].habilidade}`)
                        aux2 = false
                        break
                }
            }
        }
    }else if(r=="3"){
        alert(historico)
    }else if(r=="4"){
        listar(personagens)
    }else{
        aux1=false
        alert("fechando programa")
    }
}
