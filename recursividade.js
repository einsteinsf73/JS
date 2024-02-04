//entendendo recursividade!


let diretorioDePastas = {
    nome: 'Raiz',
    diretorios: [
        {
            nome: 'Documentos',
            diretorios: [
                {
                    nome: 'Pasta x',
                    diretorios: [
                        {
                            nome: 'Subpasta x',
                            diretorios: []
                        }
                    ]
                },
                {
                    nome: 'Pasta y',
                    diretorios: [
                        {
                            nome: 'Subpasta y',
                            diretorios: []
                        }
                    ]
                }
            ]
        },
        {
            nome: 'Downloads',
            diretorios: [
                {
                    nome: 'Filmes',
                    diretorios: []
                }
            ]
        }
    ]
};

function buscaRecursiva(nomePasta, raiz) {
    if (nomePasta === raiz.nome) return raiz;
    // varrer o restante das pastas.
    for (const dir of raiz.diretorios) {
        const resultado = buscaRecursiva(nomePasta, dir);
        if (resultado) {
            return resultado;
        }
    }
}

let localizaDIr = buscaRecursiva('Downloads', diretorioDePastas);
console.log(localizaDIr);