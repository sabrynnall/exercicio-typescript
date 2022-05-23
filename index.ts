// const primeiroNome: string = 'Sabrynna';
// const diaDoMes: number = 23;
// const hojeFezSol: boolean = false;

type Cachorro = {
    nome: string,
    idade: number,
    raça: string,
    grandePorte: boolean,
    donos: string
}

// interface Animais {
//     tipo: string,
//     bipede: boolean,
//     asas: boolean,
//     região: string
// }

// ----------- USANDO O OMIT

type meuDog = Omit<Cachorro, 'grandePorte'>;


function listarDoguinho(): meuDog {

    return {
        nome: 'Penelope',
        idade: 2,
        raça: 'Shitzu',
        donos: 'Sabrynna'
    }
}

const doguinho: Cachorro = {
    nome: 'Penelope',
    idade: 2,
    raça: 'Shitzu',
    grandePorte: false,
    donos: 'Sabrynna'
}

console.log(listarDoguinho());


// ----------- USANDO O PARTIAL

type Livro = {
    titulo: string,
    autor: string,
    ano: number,
}

type meuLivro = Partial<Livro>;


function listarLivro(): meuLivro {

    return {
        titulo: 'O Hobbit',
        autor: 'J. R. R. Tolkien',
    }
}

console.log(listarDoguinho());

// ----------- USANDO O OPTIONAL

type Loja = {
    nome: string,
    produto: string,
    quadra: number,
    aceitaCartao?: boolean
}

function listarLoja(): Loja {
    return {
        nome: 'Riachuelo',
        produto: 'vestuário',
        quadra: 12,
        // aceitaCartao: true
    }
}

console.log(listarLoja())