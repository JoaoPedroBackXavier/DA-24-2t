let personagens = [
    {nome: "link",      coracoes:1 ,  forca:1, defesa:1},
    {nome:"ganondorf", coracoes:15, forca:8 , defesa:5},
    {nome:"zelda",     coracoes:1 ,  forca:1, defesa:1},
]
// array de personagens

let armas = [
    {nome:"master sword", tipo:"arma de uma mão",   dano:30, alcance:"curto"},
    {nome:"bow",          tipo:"arco" ,             dano:15, alcance:"longo"},
    {nome:"hammer",       tipo:"arma de duas mãos", dano:0, alcance:"curto"}
]
// array de armas

let itens = [
    {nome:"bomb",          efeito:"causa dano e remove obstaculos"},
    {nome:"sleep powder",  efeito:"Faz inimigos adormecerem"},
    {nome:"Hylian Shield", efeito:"protege contra ataques magicos e fisicos, refletindo projeteis"}
]
// array de itens

function mensagemDeErro(erro){
    alert(`erro: ${erro}`)
}
// funçao que auxilia a exibir erros

function validarCoracoes(){
    for(const personagem of personagens){   
// farofe   
        let coracoesAux = personagem.coracoes
// isso diminui a repetição de codigo
        if((coracoesAux>0)&&(coracoesAux<21)){}else{
            mensagemDeErro(`numero de corações invalido`)
            return false
        }
    }
    alert(" corações dos personagens validos")
}
// eu deichei o return false para funcionar como um break

function validarNomes(){

    let aux = true
    for(personagem of personagens){
        if((personagem.nome == "ganondorf")||(personagem.nome == "link")||(personagem.nome == "zelda")){

        }else{
            mensagemDeErro(`nome ${personagem.nome} esta errado`)
            aux = false
            return false
        }
    }
    if (aux){
        alert("nome dos personagens validos")
    }
}

function validarArmas(){
    for(const arma of armas){
        if("nome" in arma){
// verifica se arma tem propriedade nome
            if("dano" in arma){

                if("alcance" in arma){

                    if(arma.dano > 0){
// verifica se arma tem dano maior que 0
                        if((arma.nome == "master sword")||(arma.nome == "bow")||(arma.nome == "hammer")){

                            if((arma.tipo == "arma de uma mão")||(arma.tipo == "arco")||(arma.tipo == "arma de duas mãos")){

                                if((arma.alcance == "curto")||(arma.alcance == "longo")){

                                }else{
                                    mensagemDeErro(`a arma de alcance ${arma.alcance} tem alcance invalido`) 
                                    return false 
                                }
                            }else{
                                mensagemDeErro(`a arma de tipo ${arma.tipo} tem tipo invalido`) 
                                return false 
                            }
                        }else{
                            mensagemDeErro(`a arma de nome ${arma.nome} tem nome invalido`) 
                            return false }
                    }else{
                        mensagemDeErro(`a arma de nome ${arma.nome} tem dano invalido`) 
                        return false        
                    }
                }else{
                    mensagemDeErro(`a arma de nome ${arma.nome} nao tem propriedade alcance`)
                    return false         
                }
            }else{
                mensagemDeErro(`a arma de nome ${arma.nome} nao tem propriedade dano`)  
                return false              
            }
        }else{
            mensagemDeErro(`a arma que da dano ${arma.dano} nao tem propriedade nome`)
            return false
        }
    }
    alert("armas validas")
}

function validarItens(){
    for(item of itens){
        switch(item.nome){
            case "bomb":
                break
            case "sleep powder":
                break
            case "Hylian Shield":
                break
// verifica se o nome é registrado
            default:
                mensagemDeErro("nome de item invalido")
        }
        switch(item.efeito){
            case "causa dano e remove obstaculos":
                break
            case "Faz inimigos adormecerem":
                break
            case "protege contra ataques magicos e fisicos, refletindo projeteis":
                break
// verifica se o efeito é registrado
            default:
                mensagemDeErro("descrição de item invalido")
        }
    }
    alert("itens validos")
}

function validarDefesa(){
    let aux = true
    for(personagem of personagens){
        let defesa = personagens.defesa
        if(defesa > 0){
        }else{
           aux = false
        }
    }
    if (aux){
        alert("defesa valida")
    }else{
        mensagemDeErro("defesa invalida")
    }
}

function validarForca(){
    let aux = true
    for(personagem of personagens){
        let forca = personagem.forca
        if(forca > 0){
        }else{
            aux = false
        }
    }
    if(aux){
        alert("força valida")
    }else{
        mensagemDeErro("força invalida")
    }
}


validarNomes()
validarCoracoes()
validarDefesa()
validarForca()
validarArmas()
validarItens()