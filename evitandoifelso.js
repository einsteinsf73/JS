//// evitando if e else "if-elso"

//const teclapressionada1 = 'B';

//if (teclapressionada1 == 'A') {
//    console.log('Pressionou a tecla A');
//} else if (teclapressionada1 == 'B') {
//    console.log('Pressionou a tecla B');
//} else if (teclapressionada1 == 'C') {
//    console.log('Pressionou a tecla C')
//} else if (teclapressionada1 = 'D') {
//    console.log('Pressionou a tecla D')
//}  // pouco eficiente, o mesmo se aplica nesse caso p/ um switch case.


const teclaPressionada = 'A';

const teclasPermitidas = {
    "A": () => {
       console.log('Apertou a tecla A');
    },
    "S": () => {
       console.log('Apertou a tecla S');
    },
    "D": () => {
       console.log('Apertou a tecla D');
    },
    "W": () => {
       console.log('Apertou a tecla W'); 
    }
};
teclasPermitidas[teclaPressionada] && teclasPermitidas[teclaPressionada]();