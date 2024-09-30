let array = [1," oi ",Number(prompt("digite um valor"))]
//  cria um array com um valor Number, Array, e prompt to Number

alert(`a array tem valores ${array[0]}, ${array[1]}, ${array[2]} com um total de ${array.length} valores`)
// alert dos valores e o length do array

array.pop()
// tira o ultimo elemento do array

array.push(prompt("digite um novo valor"))
// insere um input como ultimo elemnto

alert(`a array tem valores ${array[0]}, ${array[1]}, ${array[2]} com um total de ${array.length} valores`)

array[2] =array[2].replaceAll("a", "b")
// pega o terceiro elemento do array e troca todas letras a por b

alert(`a array tem valores ${array[0]}, ${array[1]}, ${array[2]} com um total de ${array.length} valores`)

let r = Number(prompt("digite o indice que voce quer slicear 1, 2 ou 3"))-1
// pega a resposta do usuario diminuida por 1 por causa que o index começa em 0

array.splice(r,1)
// apaga elementos a partir do primeiro parametro e determina quantos pelo segundo parametro

alert(`a array tem valores ${array[0]}, ${array[1]}, ${array[2]} com um total de ${array.length} valores`)