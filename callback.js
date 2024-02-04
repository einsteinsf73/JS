//callback em JS, uma fun��o como argumento de outra fun��o.


function pedirSushi(callbackAviso) {
    //preparando sushi, pode demorar! simular o exemplo com timeout
    setTimeout(function () {
        const sushiPronto = {
            sabores: "incluso hot rool",
            preco: 95
        }

        return callbackAviso(sushiPronto);
    }, 5000)
}


pedirSushi(function (sushi) {
    console.log(sushi);
});