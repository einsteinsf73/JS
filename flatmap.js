// flatMap para nivelar arrays.


const arrayFudido = [
    1,
    2,
    ['teste1', 'teste2'],
    1,
    ['teste3']
]


//saida esperada: 1, 2, 'teste1' , 'teste2' , 1 , 'teste3'

const array = arrayFudido.flatMap(array => array);
console.log(array);