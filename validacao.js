// teste validacao

let valorTruthy = "";
let valorFalsy = false | undefined | null;

if (valorTruthy) {
    console.log("Isso sera impresso, pois e Truthy.");
}
else {
        console.log("Valor inserido e false, undefined ou null");
    }
