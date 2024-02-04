//callback em JS, uma função como argumento de outra função.


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