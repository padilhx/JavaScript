/*   Transformar notas escolares

Crie um algoritmo que trasforme as notas do sistema numerico para sistema de notas em caracteres tipo A B C

* de 90 para cima   - A
* entre 80 - 89     - B
* entre 70 - 79     - c
* entre 60 - 69     - d
* abaixo de 60      - f

const alunos = [
    {
        nome: 'Lucas',
        nota: 100,
    }, {
        nome: 'guilherme',
        nota: 100,
    }, {
        nome: 'jean',
        nota: 88,
    }, {
        nome: 'andre',
        nota: 0,
    }, {
        nome: 'kg',
        nota: 55,
    },
]

alunos.map(aluno => {
    if (aluno.nota >= 90) {
        console.log(`aluno: ${aluno.nome} teve nota A`)
    } else if (aluno.nota >= 80) {
        console.log(`aluno: ${aluno.nome} teve nota B`)
    } else if (aluno.nota >= 70) {
        console.log(`aluno: ${aluno.nome} teve nota C`)
    } else if (aluno.nota >= 60) {
        console.log(`aluno: ${aluno.nome} teve nota D`)
    } else if (aluno.nota < 60) {
        console.log(`aluno: ${aluno.nome} teve nota F`)
    }
})
*/

/*  ### Sistema de gastos familiar

crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a familia está com saldo positivo ou negativo, seguido do valor do saldo
*/

/*
let family = {
    incomes: [2000, 1200, 342, 122.3],
    expenses: [320, 350, 1220, 3000, 450, 322.2]
}
function sum(array) {
    let total = 0;

    for (let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let BalanceText = "saldo negativo fudido"

    if (itsOk) {
        BalanceText = "positivo maneirin"
    }

    console.log(`seu saldo é ${BalanceText}: ${total.toFixed(2)}R$`)
}

calculateBalance()
*/



/* Celsius em fahrenheit

    crie uma função que receba uma String em celsius ou fahrenheit e faça a transformação de uma unidade para outra

    c = (f - 32) * 5/9

    f = c * 9/5 + 32

*/

/*
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')
    // fluxo de erro
    if (!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }
    // fluxo ideal F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5 / 9
    let degreeSign = 'C'

    // Fluxo alternativo C -> F
    if (celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9 / 5 + 32
        degreeSign = 'F'
    }



    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('50F'))
    console.log(transformDegree('10c'))
    transformDegree('50Z')
} catch (error) {
    console.log(error.message)
}
*/

/*
    § Buscando e contando dados em Arrays

    baseado no Array de livros por categorias abaixo, faça os seguintes desafios

        • Contar o número de categorias e o numero de livros em cada categoria
        • contas o numero de autores de
        • Mostrar livros de autor Augusto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                tittle: "Os segredos da mente milionária",
                author: "T. harv Eker",
            },
            {
                tittle: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                tittle: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },

        ],
    },
    {
        category: "Inteligência emocional",
        books: [
            {
                tittle: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                tittle: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                tittle: "Os 7 hábitos das pessoas altamente eficazes",
            },
        ],
    },
]


const totalCategories = booksByCategory.length

console.log(totalCategories);
for (let category of booksByCategory) {
    console.log('total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
    console.log("total de autores", authors.length)
}
countAuthors();

function booksOfAuthor(author) {
    let books = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === author) {
                books.push(book.tittle)
            }
        }
    }
    console.log(`livros do autor ${author}: ${books.join(", ")}`)
}
booksOfAuthor('Augusto Cury')