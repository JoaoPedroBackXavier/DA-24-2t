let GrausC = 0
GrausC = Number(prompt("digite graus celsios para serem convertidos"))
if(isNaN(GrausC)){
    alert("erro, digite um número inteiro")
}else{
    alert(`${GrausC} graus Celsius para fahrenheit da ${(GrausC * (9/5))+32} fahrenheit`)
}

//   é esperado que a entrada em numero vai ser convertida para fahrenheit e 
//   se for entrado uma letra ira mostrar uma mensagem de erro
//
//   N°   ent.  Sai.Esp. Sai.Rea.
//    ____________________________
//   | 1  |  1  |  33.8  |  33.8  |
//   | 2  |  A  |  alert |  alert |
//   | 3  | 1,1 |  33,98 |  alert |
//   | 4  | -1  |  30,2  |  30,2  |
//   | 5  |  #  |  alert |  alert |
//   ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
//   algoritmo falhou
//
//   o algoritmo deu alert porque eu coloquei isNaN() 
//   então se o usuario colocar algo que não seja numero, o isNaN() vai dar true
//   falhou porque eu nao coloquei para a entrada ser convertida para numero Real antes de calcular
//   dai ele acabou virando NaN e deu o alert.
//