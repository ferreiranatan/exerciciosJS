//Escreva uma função que recebe um lista de 5 números inteiros em forma de string separada por “-”, converta para array e mostre a soma de todos os números que são menores que 30.

const botao = document.getElementById('submit')
const res = document.getElementById('resposta')

function somaValores() {
    const input = document.getElementById('valor').value

    let numero = input.split('-').map(num => parseInt(num))
    let soma = numero.reduce((acc, num) => acc + (num < 30 ? num : 0), 0);
    res.innerHTML = soma
    
}

function Somar() {
    botao.addEventListener('click', somaValores)
}

Somar()