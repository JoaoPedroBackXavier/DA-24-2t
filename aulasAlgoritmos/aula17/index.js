// const pessoa = {
//     ocupassão : "worker",
//     name : "theGamer",
//     estudy : true,
//     idade : -100,
//     texto : prompt(" fire in the hole ")
// }
// alert(pessoa)

// let tipos = {
//     inteiro : 10,
//     fracionauro : 1.0,
//     irracioanal : 1/3,
//     total : function(){
//         alert(tipos.inteiro + tipos.fracionauro + tipos.irracioanal)
//         alert(tipos[inteiro] + " é inteirou")
//     }
// }
// tipos.total()
// tipos.inteiro = 100

// let filme = {
//     direcao : "theRockInFlesh",
//     nome : "filmeCool",
//     feito : "19/10/2015",
//     nota: 9.5,
//     elenco : [
//         "peterParker",
//         "obama",
//         "eu"
//     ],
//     jaVi : false
// }

// alert(
//     filme.direcao + "\n" +
//     filme.nome + "\n" +
//     filme.feito + "\n" +
//     filme["nota"] + "\n" +
//     filme["elenco"] + "\n" +
//     filme["jaVi"] + "\n" 
// )

// let pessoa = {
//     nome : " joao the games",
//     idade : 19,
//     genroMusc : "musicas em geral"
// }

// alert(`o nome é${pessoa.nome} tem ${pessoa.idade} anos e gosta de ${pessoa.genroMusc}`)

// let carrochoMeu = {
//     eu : "john gamer",
//     pett : {
//         name : "mel",
//         idade : 6,
//         raca : "pastor belga malinoise"
//     },
// }

// alert(carrochoMeu.eu)
// alert(carrochoMeu.pett.name)
// alert(carrochoMeu.pett.idade)
// alert(carrochoMeu.pett.raca)

// let profe = {
//     tarofas : [
//         "daraula",
//         "encinar",
//     ],
// }
// alert(profe.tarofas[0],"\n",profe.tarofas[1])

// let professoures = [
//     {name : "the gamer",},
//     {name : "fulanal",},
//     {name : "lucas",},

// ]

// alert(`os prferssoreres são ${professoures[0].name}, ${professoures[1].name} e ${professoures[2].name}`)

// let filme = {
//     direcao : "theRockInFlesh",
//     nome : "filmeCool",
//     feito : "19/10/2015",
//     nota: 9.5,
//     elenco : [
//         "peterParker",
//         "obama",
//         "eu"
//     ],
//     jaVi : false
// }

// filme.personagens = [
//     " o carinha",
//     " o otro carinha",
//     " mais outro carinha"
// ]

// alert(filme.elenco[0] + filme.personagens[0])
// alert(filme.elenco[1] + filme.personagens[1])
// alert(filme.elenco[2] + filme.personagens[2])

// filme.elenco[0] = "shasha"

// alert(
//     filme.direcao + "\n" +
//     filme.nome + "\n" +
//     filme.feito + "\n" +
//     filme["nota"] + "\n" +
//     filme["elenco"] + "\n" +
//     filme["jaVi"] + "\n" +
//     filme.personagens + "\n"
// )

// let user1 = {
//     nome: "john",
//     apelido : "gamer",
//     email : "gamerDotjohn@gmailDotCom",
//     nascimento : "2000"
// }

// let user2 = {
//     ...user1,
//     email : "gamer.john@gmail.com"
// }

// alert (user1.email)
// alert (user2.email)

// let nomeProfes = ["lucas","leo","mika"]
// let novaLista = [...nomeProfes, "joaothegamer"]

// function adicionaElement(pessoa){
//     let novaPessoa = {
//         ...pessoa,
//         comidas : [
//             "arroz",
//             "fejoão"
//         ],
//         amigo : {
//             nome : "bestto frienddo",
//             age : "90"
//         },
//     }
//     alert (` nome : ${novaPessoa.name} \n idade: ${novaPessoa.age} \n genero: ${novaPessoa.gender} \n comidas mais gostosas da pessoa: ${novaPessoa.comidas} \n nome do friende: ${novaPessoa.amigo.nome} \n idade do friende: ${novaPessoa.amigo.age}`)
// }

// let pessoua = {
//     name : "jtgamer",
//     age : "16",
//     gender : "wallmart bag"
// }

// adicionaElement(pessoua)


// let personagens = [
//     {nome:"naruto",idade:"17",estilo:"ninjutsu e taijutsu",jutsus:"clone das sombras e rasengan"},
//     {nome:"sakura",idade:"17",estilo:"taijutsu",jutsus:"Fubuki no Jutsu, Shōsen Jutsu, Sei no Jutsu"},
//     {nome:"sasuke",idade:"17",estilo:"ninjutsu e genjutsu",jutsus:"chidori, amaterasu e susanoo"}
// ]

// let personagem = {
//     nome : "kakashi", idade:"31", estilo:"ninjutsu, genjutsu e taijutsu",jutsus:"Raikiri, Kage Bunshin no Jutsu e Kamui"
// }

// function adicionarPersonagem(personagem){
//     personagens = [
//         {nome:"naruto",idade:"17",estilo:"ninjutsu e taijutsu",jutsus:"clone das sombras e rasengan"},
//         {nome:"sakura",idade:"17",estilo:"taijutsu",jutsus:"Fubuki no Jutsu, Shōsen Jutsu, Sei no Jutsu"},
//         {nome:"sasuke",idade:"17",estilo:"ninjutsu e genjutsu",jutsus:"chidori, amaterasu e susanoo"},
//         personagem
//     ]
// }

// let r = prompt("qual personagem voce procuras?")

// function buscarPersonagem(nome){
//     if(nome == personagens[0].nome){
//         return personagens[0]
//     } else if(nome==personagens[1].nome){
//         return personagens[1]
//     } else if(nome==personagens[2].nome){
//         return personagens[2]
//     } else if(nome==personagens[3].nome){
//         return personagens[3]
//     }else {
//         return "escreveu erroneamente sir"
//     }
// }
// alert(buscarPersonagem(r))