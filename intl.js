// Intl


const valorbrl = 1420
const valorusd = 1420
const valorgbp = 1420
//Criando uma instancia de Intl.NumberFormat

const formatoMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency', currency: 'BRL'
});

// Formatando como moeda Brasileira
const valorFormatadobrl = formatoMoeda.format(valorbrl);

//exibindo o resultado
console.log(valorFormatadobrl);

//Dollar

const formatoDolar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});
// Formatando como Dollar
const valorFormatadousd = formatoDolar.format(valorusd);
console.log(valorFormatadousd);

//Libra

const formatoLibra = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP'
});
//Formatando como Libra
const valorFormatadogbp = formatoLibra.format(valorgbp);
console.log(valorFormatadogbp);