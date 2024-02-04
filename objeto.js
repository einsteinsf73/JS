// Objetos em JS!
// Exemplo com função declarada antes da chamada.

funcaoteste();

function funcaoteste() {
    console.log("Executando a funcao teste.");
}



// exemplo em que o Hoisting não funciona.

console.log("texto aleatorio qualquer: " + variavel);

var variavel = "não vai funcionar";