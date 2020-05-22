const valores =[7.7, 8.9 , 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])// ler valor de um array.
//quando um array não existe recebe o nome de undefined.
valores[10] = 10
console.log(valores)
console.log(valores.length) // Conta a quantidade de arrays.

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // retira um elemento de um array.
delete valores[0] // apaga o valor de um array.
console.log(valores)

console.log(typeof valores) // array e do tipo object.