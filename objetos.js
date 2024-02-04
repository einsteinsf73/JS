// objetos em JS.

//let nome = "Alfred", sobrenome = "Newton", idade = 34;

let pessoa = {
    nome: "Alfred",
    sobrenome: "Newton",
    idade: 34,
    getNomeCompleto: function () {
        return this.nome + " " + this.sobrenome;
    }

};
console.log(pessoa.getNomeCompleto());
