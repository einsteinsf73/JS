// ordenar array de strings.


let nomes = ['Alface', 'Cenoura', 'Beterraba', 'Repolho','Limão','Árvore']
//let ordenar = nomes.sort() -- não funciona para caracteres especiais.
let ordenar = nomes.sort ((a,b) => a.localeCompare(b))
console.log(ordenar)