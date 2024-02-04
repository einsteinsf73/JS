let numeros = [ 23, 33, 55, 4, 9, 101, 5, 12, 26, 3, 54, 99, 73];


let maiorNumero = 0;
for (let i = 0; i < numeros.length; i++) {
    let numeroDoArray = numeros[i];
    
    if (numeroDoArray > maiorNumero) {
        maiorNumero = numeroDoArray;
    }
}

console.log(maiorNumero);