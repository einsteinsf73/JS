// referência de objeto

let obj1 = {
    nome: 'teste1'
};


let obj2 = { ...obj1 }; //let obj2 = obj1; -- se escrever assim, os 2 serão alterados.
obj2.nome = 'alteração teste';
console.log(obj1);
console.log(obj2);