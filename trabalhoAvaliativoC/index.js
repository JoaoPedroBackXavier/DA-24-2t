let personagens = [
    {nome:"link",      coracoes:5 ,  forca:2, defesa:3},
    {nome:"Ganondorf", coracoes:15, forca:8 , defesa:5},
    {nome:"zelda",     coracoes:1 ,  forca:1, defesa:1}
]
// array de personagens

let armas = [
    {nome:"master sword", tipo:"arma de uma mão",   dano:30, alcance:"curto"},
    {nome:"bow",          tipo:"arco" ,             dano:15, alcance:"longo"},
    {nome:"hammer",       tipo:"arma de duas mãos", dano:20, alcance:"curto"}
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
            mensagemDeErro(`numero de corações invalido no personagem ${personagem.nome}`)
            return false
        }
    }
    alert(" corações dos personagens validos")
}
// eu deichei o return false para funcionar como um break

function validarArmas(){
    for(const arma of armas){
        if("nome" in arma){
// verifica se arma tem propriedade nome
            if("dano" in arma){
                if("alcance" in arma){
                    if(arma.dano > 0){
// verifica se arma tem dano maior que 0
                        if((arma.nome == "master sword")||(arma.nome == "bow")||(arma.nome == "hammer")){

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
                mensagemDeErro("nome de item invalido")
        }
    }
    alert("itens validos")
}


validarCoracoes()
validarArmas()
validarItens()