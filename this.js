//this -- objeto

this.teste = 'Eu sou o Goku!';
console.log(this.teste);
function imprimirThis() {
    // this.teste1 = 'Eu sou o Gohan!';
    console.log(this.teste1);
}
imprimirThis();  //undefined pois o this está fora do contexto. para corrigir, leia o comentário acima.