var consultaCep = fetch('https://viacep.com.br/ws/01001000/json/')
    .then(resposta => resposta.json())
    .then(r => {
        if (r.erro) {
            throw Error('Esse não é um cep válido!')
        } else {
            console.log(r)
        }
    })
    .catch(erro => console.log(erro))

console.log(consultaCep)