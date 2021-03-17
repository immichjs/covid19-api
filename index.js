const axios = require('axios')
const keyToken = 'qui vai o token gerado no site https://brasil.io/auth/tokens-api/'

axios.get('https://api.brasil.io/v1/dataset/covid19/caso/data/?format=json', {
    headers: {
        Authorization: `token ${keyToken}`
    }
}).then(function(response) {
    const structure = response.data
    const data = response.data.results.forEach(element => {
        const city = element.city
        const confirmed = element.confirmed
        const deaths = element.deaths
        const state = element.state

        console.log(`Cidade: ${city}`,
            `Quantidade de confirmados: ${confirmed}`, 
            `Quantidade de mortes ${deaths}`,
            `Estado: ${state}`)
    });


    console.log(data)
}).catch(function (error) {
    if (error) {
        console.log(error)
    }
})