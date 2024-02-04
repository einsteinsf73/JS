// array.filter()

let humanos = [
    { nome: "Fulano de tal 1", ehBurro: true },
    { nome: "Fulano de tal 2", ehBurro: true },
    { nome: "Fulano de tal 3", ehBurro: false },
    { nome: "Fulano de tal 4", ehBurro: true },
    { nome: "Fulano de tal 5", ehBurro: true }
]

let burros = humanos.filter((humanos) => humanos.ehBurro !== true) //ou !humanos.ehBurro


console.log(burros)