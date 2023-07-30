// Escreva uma função que recebe um número inteiro positivo, e mostre na tela todos os números até chegar ao seu valor

let resposta = document.getElementById('resposta')
let botao = document.getElementById('submit')

const contador = () => {

    let valorDeEntrada = parseInt(document.getElementById('input').value)
    event.preventDefault
    if (valorDeEntrada > 0 && valorDeEntrada < 999999999) {
        for (let n = 0; n <= valorDeEntrada; n++) {
            setTimeout(() => {
                resposta.innerHTML = n;
            }, n * 450)
        }
    } else {
        resposta.innerHTML = "insira um valor válido"
    }
}
    ;
const mostrarNaDiv = () => {

    botao.addEventListener('click', contador)
}
mostrarNaDiv()
