// // Escreva uma função que lê o ano de nascimento de uma pessoa. 
// Mostre uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).
const botao = document.getElementById('submit')
const resposta = document.getElementById('resposta')

function votaOuNao() {
    
    event.preventDefault()
    const valor = parseInt(document.getElementById('dia').value)
    
    let anoAtual = new Date().getFullYear()
    let idade = anoAtual - valor
    
    
    if (isNaN(valor) || valor > anoAtual && valor > 0) {
        resposta.innerHTML = 'Insira um valor válido'
    }
    
    if (idade >= 16) {
        resposta.innerHTML = `Você tem ${idade} anos de idade e nesse ano de ${anoAtual} e você podera votar!`
    } else if (idade < 16) {
        resposta.innerHTML = `Você tem ${idade} anos de idade e você ainda não pode votar!!`
    }
    
    
}



function enviarValor() {
    botao.addEventListener('click', votaOuNao)
}

enviarValor()