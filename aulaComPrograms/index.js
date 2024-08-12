let PNome = ""
let idade = 0

PNome = prompt("qual o nome")
idade = Number(prompt("qual a idade"))

alert(`meu nome é ${PNome} e minha idade é ${idade} esses valores sao ${typeof(PNome)} e ${typeof(idade)}`)




/*
let caracteres = "";
let numero = 0;

function mudarNome() {
    caracteres = prompt("Novo nome:");
}

function mudarNumero() {
    numero = parseInt(prompt("Novo número:"), 10); // Converte a entrada para número inteiro
}

while (true) {
    let resposta = prompt("Você quer mudar uma variável? (Y/N)");

    if (resposta === "Y") {
        let tipo = prompt("Número ou string? (Num/Str)");

        if (tipo === "Num") {
            mudarNumero();
        } else if (tipo === "Str") {
            mudarNome();
        } else {
            alert("Resposta inválida!");
        }
    } else if (resposta === "N") {
        let acao = prompt("Quer voltar ou imprimir as variáveis? (V/I)");

        if (acao === "I") {
            alert(`O nome é ${caracteres} e o número é ${numero}`);
        } else if (acao === "V") {
            // Se quiser voltar, o loop já vai reiniciar automaticamente
            continue;
        } else {
            alert("Resposta inválida!");
        }
    } else {
        alert("Resposta inválida!");
    }
}
*/
