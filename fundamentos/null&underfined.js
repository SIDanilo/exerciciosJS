let valor // não inicializada.
console.log(valor)

valor = null // ausência de valor.
console.log(valor)
// console.log(valor.toString()) // Erro!


const produto = {}
console.log(produto.preco)

produto.preco = 3.58
console.log(produto)

produto.preco = undefined // Evite atribuir undefined.
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço.