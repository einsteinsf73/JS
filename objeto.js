// Objetos em JS!
// Exemplo com fun��o declarada antes da chamada.

funcaoteste();

function funcaoteste() {
    console.log("Executando a funcao teste.");
}



// exemplo em que o Hoisting n�o funciona.

console.log("texto aleatorio qualquer: " + variavel);

var variavel = "n�o vai funcionar";