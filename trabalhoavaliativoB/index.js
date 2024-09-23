// apenas joão pedro back xavier
let historico = ""
let aux1 = true
    let aux2 = true
    let aux3 = ""
    let r = ""
let r2 = ""
let r3 = 0
let r4 = ""

let personagens = []

function listar(array){
    for(personagem of array){
        aux3=aux3+(`id: ${personagem.id} | nome: ${personagem.nome} | classe: ${personagem.classe} | nivel: ${personagem.nivel} | hp: ${personagem.hp}`) + "\n"
    }
    console.log(aux3+ "\n -----------------------------------------------------------------------------------------")
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
            hp: 10
        }
    }else{
        personagemAux = {
            id: 1,
            nome: prompt("qual vai ser o nome do personagem?"),
            classe: prompt("qual vai ser a classe dele?"),
            nivel: 0,
            hp: 10
        }
    }
    array.push(personagemAux)
}

while (aux1){
    r = prompt("editar personagens(1), usar ação(2) ou ver historico(3)?")
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
    }else if(r=="2"){
        aux2 = true
        while(aux2){
            listar(personagens)
            r2 = Number(prompt("qual o id do personagem que vai fazer a ação"))
            if(personagens.length==0){
                aux2 = false
                alert(`sem persongens, saindo do menu de açoes`)
            }else{
                r4 = prompt("atacar(1), defender(2), especial(3)")
                switch (r4){
                    case "1": historico = historico + `${personagens[r2-1].nome} atacou \n` 
                        alert(`${personagens[r2-1].nome} atacou`)
                        aux2 = false
                        break
                    case "2": historico = historico + `${personagens[r2-1].nome} defendeu \n` 
                        alert(`${personagens[r2-1].nome} defendeu`)
                        aux2 = false
                        break
                    case "3": historico = historico + `${personagens[r2-1].nome} deu especial \n` 
                        alert(`${personagens[r2-1].nome} deu especial`)
                        aux2 = false
                        break
                }
            }
        }
    }else if(r=="3"){
        console.log(historico)
    }else{
        aux1=false
        alert("fechando programa")
    }
}
