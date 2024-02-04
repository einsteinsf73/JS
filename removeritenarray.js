// removendo itens de um array!

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //indices: 0,1,2,3,4,5,6,7,8,9

array.splice(2, 1); //remove o indice 2, que no caso é o numero 3.
console.log(array);
array.splice(9, 1);//não irá funcionar, pois o indice foi reajustado
console.log(array);//exibirá o mesmo array do primeiro.
array.splice(8, 1);//agora estou removendo o número 10!
console.log(array);
//posso também usar o index.
let index = array.indexOf(8);
array.splice(index, 1);
console.log(array);