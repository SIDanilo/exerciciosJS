// par nome/ valor
const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}
//Objetos são gurpos aninhados de pares nome/valor
const cliente = {
    nome: 'Danilo',
    idade: 27,
    peso: 90,
    endereco : {
        logradouro: 'Rua 45',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)