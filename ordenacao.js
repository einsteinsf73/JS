// ordenar array de strings.


let nomes = ['Alface', 'Cenoura', 'Beterraba', 'Repolho','Lim�o','�rvore']
//let ordenar = nomes.sort() -- n�o funciona para caracteres especiais.
let ordenar = nomes.sort ((a,b) => a.localeCompare(b))
console.log(ordenar)