let i = 1
while (i == 1){

    let a = 10      // variavel inconstante A recebe 10.
    let b = 10      // variavel inconstante B recebe 10.
    console.log(b)  // registre no console, a variavel B.
    b = 5           // variavel B recebe 5.
    console.log(a,b)// registre no console, a variavel A e depois a variavel B.

    i = i+1
}
// saida 
// 10
// 10 5

while (i == 2){

    let a = 10              // variavel inconstante "a" recebe 10
    let b = 20              // variavel inconstante "b" recebe 20
    c = a                   // variavel c recebe o atual valor de a
    b = c                   // variavel b recebe o atual valor de c
    a = b                   // variavel a recebe o atual valor de b
    console.log(a,b,c)      // registre no console, a, b e c

    i = i+1
}
// saida
// 10 10 10


while (i == 3){
    let p = prompt("quantas horas você trabalha por dia?") // variavel inconstante p recebe resposta do usuario -- poderia ser "horasTrabalhadasPorDia"
    let t = prompt("quanto você recebe por dia?")         // variavel inconstante t recebe resposta do usuario  -- poderia ser "ValorPorDia"
    console.log(`voce recebe ${t}/${p} por hora`)         // registre no console, `voce recebe ${t}/${p} por hora`
    i = i+1
}