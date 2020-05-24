// novo recurso do ES2015
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade} = pessoa //Retirando atributos de um objeto.
console.log(nome, idade)

const { nome: n, idade: i} = pessoa //Retirando atributos com variaveis diferentes.
console.log(n,i)

const { sobrenome, bemHumorada = true } = pessoa //Removendo atributos que não foram definidos e sentando valor padrao.
console.log(sobrenome, bemHumorada)

const { endereco: {logradouro, numero, cep} } = pessoa //Removendo atributos dentro de outra classe.
console.log(logradouro, numero, cep)