let array = [1," oi ",Number(prompt("digite um valor"))]
alert(`a array tem valores ${array[0]}, ${array[1]}, ${array[2]} com um total de ${array.length} valores`)
array.pop()
array.push(prompt("digite um novo valor"))
alert(`a array tem valores ${array[0]}, ${array[1]}, ${array[2]} com um total de ${array.length} valores`)
array[2] =array[2].replaceAll("a", "b")
alert(`a array tem valores ${array[0]}, ${array[1]}, ${array[2]} com um total de ${array.length} valores`)
let r = Number(prompt("digite o indice que voce quer slicear 1, 2 ou 3"))-1
array.splice(r,1)
alert(`a array tem valores ${array[0]}, ${array[1]}, ${array[2]} com um total de ${array.length} valores`)