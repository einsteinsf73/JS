// arrow function em tudo?
// cuidado com isso.
//lembrar exercicio do this.


let exemplo = {
    nome: 'Teste',
    sobrenome: '1',
    getNome: function () {        //getNome: () => {  //desse jeito comentado retorna undefined, pois o this da arrow function faz referencia ao escopo acima do objeto exemplo.
        console.log(this.nome);
    }
}
exemplo.getNome()