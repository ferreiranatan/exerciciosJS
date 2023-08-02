// Escreva uma função que lê um nº inteiro de um campo e mostre uma mensagem indicando se este número é par ou ímpar.

const botao = document.getElementById('enviarNumero')
const resultado = document.getElementById('result') 


function parouImpar() {
  let valorInput = document.getElementById('parOuImpar').value 
  let mensagem 
  
  if (valorInput % 2 === 0) {
    mensagem = `<p>O numero ${valorInput} é Par </p>`


  } else {
    mensagem = `<p>O numero ${valorInput} é Impar </p> `

  }
  
  resultado.innerHTML = mensagem

 
}
//Função para exibir o resultado!

function exibirResultado() {

  botao.addEventListener('click', parouImpar);
}




exibirResultado()

