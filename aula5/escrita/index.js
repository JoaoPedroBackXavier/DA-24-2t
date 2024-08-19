let Nome = ""
let Idade = 0
alert((typeof(Nome))) 
alert((typeof(Idade)))
// string e number
// foi porque eu declarei Nome como string e Idade como 
// number dando um valor desse tipo para eles
Nome = prompt("qualé seu nome?")
Idade = Number(prompt("qualé sua idade?"))
alert((typeof(Nome))) 
alert((typeof(Idade))) 
// String e Number
alert(`seu nome é ${Nome} sua idade é ${Idade}`)