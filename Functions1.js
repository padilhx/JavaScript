//console.log('aulas sobre funções')


//criar um aplicativo de frases emocionais

// declaration - declaração da função
// function statement

function createPhrases() {
    console.log('Olá, tudo bem?')
    console.log('Me chamo guilherme')
    console.log('E estou aprendendo JS')
}

// executar a função
// rodar, chamar, invocar
// execute, run, call, invoke

createPhrases()

console.log('fim do programa')

// function expression
// function anonymous
let total = 0
// parâmetros (parameters)
const sum = function (number1, number2) {
    let total = (number1 + number2)
    return total // precisa sempre do return para ter o retorno da soma
}

let number12 = 12
let number13 = 13

sum(2, 3) // argumentos - arguments
sum(13, 17)

//console.log(`o número 1 é ${number12}`)
//console.log(`o número 2 é ${number13}`)
console.log(`a soma dos números é ${sum(number12, number13)}`)
console.log(total)

// MUITO INPORTANTE LEMBRAR COMO FUNCIONA AS FUNÇÕES

// Função é um lidiquificador

function fazerSuco(fruta1, fruta2) {
    return 'suco de ' + fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maça')
console.log("🚀 ~ file: Functions1.js ~ line 52 ~ copo", copo)



// FUNCTION SCOPE

let subject = 'create video'
//é preciso nomear a função, para que ela não embaralhe e perca o sentido (não importa que está o mesmo nome)
function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(createThink(subject))
console.log(subject)

// function hoisting

/*sayMyName()

function sayMyName() {
    console.log('guizada')
}

// arrow function
// tem a mesma função que o function, colocando em ordem

const sayMyName = (name) => {
    console.log(name)
}

sayMyName('gui')

// callback function

// Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

function sayMyGame (game) {
    console.log('antes de executar a função callback')

    name() // busca fora da função e tras o argumento

    console.log('depois de executar a callback')
}

sayMyGame(  
    () => {
        console.log('estou em callback')
    }
)*/

/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
    * O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.

*/
let date = new Date("1999-02-09")

console.log(date)

/*function Person(name) {
    this.name = name
    this.feel = function () {
        return this.name + " está feliz"
    }
}

const gui = new Person("gui")
const jean = new Person("jean")
console.log(gui.feel())
console.log(jean.feel())
*/