// Desestruturação

var pessoa = { nome: 'Teste', idade: 28 };
var nome = pessoa.nome;
var idade = pessoa.idade;
console.log(nome, idade);

// mudou com o ecma script 6

const pessoa2 = { nome2: 'Fulano', idade2: 25 };
const { nome2, idade2 } = pessoa2;
console.log(nome2, idade2);

// também funciona com array.

const numeros = [1, 2, 3, 4, 5];

const [ primeiro, segundo, terceiro, quarto, quinto ] = numeros;

console.log(primeiro);
console.log(segundo);
console.log(terceiro);
console.log(quarto);
console.log(quinto);