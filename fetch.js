// consumir dados de uma api usando fetch.

const address = 'https://jsonplaceholder.typicode.com/'
const endpoint = 'users'
const verb = 'GET'

async function fetchDados() {
    const dados = await fetch(address + endpoint, { method: verb })
    const nomes = await dados.json()
    console.log(nomes)

}

fetchDados()