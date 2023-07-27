// 2 Escreva uma função que lê dois nº inteiros diferentes e mostre uma mensagem indicando qual é o maior.
// if(typeof numeroUm && typeof numeroDois != Number){
//      'insira um valor válido'
// }

    const valorUm = document.getElementById('um').value
    const valorDois = document.getElementById('dois').value
    const botao = document.getElementById('submit')
    const resposta = document.getElementById('mostrar_valor')
    function comparandoValores() {

    if (valorUm > valorDois) {
        return `<p>O numero ${valorUm} é maior que o numero ${valorDois}</p>`
    } else if (valorUm < valorDois) {
        return `<p>O numero ${valorUm} é menor que o numero ${valorDois}</p> `
    } else {
        return'Os numeros tem o mesmo valor'
    }

}

function mostrarValor()

botao.addEventListener(click,()=>{
resposta.innerHTML = comparandoValores()
})