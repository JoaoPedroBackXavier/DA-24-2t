// const toggles = document.querySelectorAll('input[type="checkbox"]');
// const states = [];

// // Inicializa o estado dos interruptores
// function initStates() {
//     // Define o número de interruptores
//     const numSwitches = toggles.length;
//     for (let i = 0; i < numSwitches; i++) {
//         states[i] = false; // Inicializa como desligado
//     }
// }

// // Atualiza o estado quando o interruptor muda
// toggles.forEach((toggle, index) => {
//     // Carrega o estado inicial
//     toggle.checked = states[index];


// function calcular(){
//     function subCalcular(e1,e2,vai,vai2,ra){
//         if ((e1 && e2) || (e1 && vai) || (e2 && vai) || (e1 && e2 && vai)){
//             vai2 = true
//         }
//         if((e1 ^ e2 ^ vai) || (e1 && e2 && vai)){
//             ra = 1
//         }
//     }
//     let e1a = states[0]
//     let e2a = states[1]
//     let e3a = states[2]
//     let e4a = states[3]
//     let e1b = states[4]
//     let e2b = states[5]
//     let e3b = states[6]
//     let e4b = states[7]
//     let r1 = 0
//     let r2 = 0
//     let r3 = 0
//     let r4 = 0
//     let r5 = 0
//     let vai1 = false
//     let vai2 = false
//     let vai3 = false
//     let vai4 = false

//     if(e1a && e1b){
//         vai1 = true
//     }
//     if(e1a ^ e1b){
//         r1 = 1
//     }

//     subCalcular(e2a,e2b,vai1,vai2,r2)
//     subCalcular(e3a,e3b,vai2,vai3,r3)



//     return `${r1} ${r2} ${r3} ${r4} ${r5}`
// }

//     toggle.addEventListener('change', () => {
//         states[index] = toggle.checked; // Atualiza o estado no array
// //        console.log(`Status do interruptor ${toggle.id}:`, states[index]);
//         console.log(`o resultado é ${calcular()}`)
//     });
// });

// // Inicializa os estados
// initStates();

const toggles = document.querySelectorAll('input[type="checkbox"]');
const states = [];

// Inicializa o estado dos interruptores
function initStates() {
    const numSwitches = toggles.length;
    for (let i = 0; i < numSwitches; i++) {
        states[i] = false; // Inicializa como desligado
    }
}

// Função para calcular os resultados
function calcular() {
    function subCalcular(e1, e2, carryIn) {
        const sum = (e1 ^ e2) ^ carryIn; // Soma bit a bit
        const carryOut = (e1 && e2) || (carryIn && (e1 || e2)); // Carry out
        return { carryOut, sum };
    }

    let e1a = states[0];
    let e2a = states[1];
    let e3a = states[2];
    let e4a = states[3];
    let e1b = states[4];
    let e2b = states[5];
    let e3b = states[6];
    let e4b = states[7];

    // Calcula a soma e carry para o primeiro par
    const { carryOut: carry1, sum: r1 } = subCalcular(e1a, e1b, false);

    // Calcula a soma e carry para o segundo par
    const { carryOut: carry2, sum: r2 } = subCalcular(e2a, e2b, carry1);

    // Calcula a soma e carry para o terceiro par
    const { carryOut: carry3, sum: r3 } = subCalcular(e3a, e3b, carry2);

    // Calcula a soma e carry para o quarto par
    const { carryOut: carry4, sum: r4 } = subCalcular(e4a, e4b, carry3);

    return `${r1} ${r2} ${r3} ${r4}`;
}

// Atualiza o estado quando o interruptor muda
toggles.forEach((toggle, index) => {
    toggle.checked = states[index];

    toggle.addEventListener('change', () => {
        states[index] = toggle.checked; // Atualiza o estado no array
        console.log(`O resultado é ${calcular()}`);
    });
});

// Inicializa os estados
initStates();
