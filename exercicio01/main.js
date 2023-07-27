// Escreva uma função que lê um nº inteiro de um campo e mostre uma mensagem indicando se este número é par ou ímpar.


// Pegar o Valor digitado no imput e verificar se Par ou Impar!
function parouImpar() {
  let valorInput = document.getElementById('parOuImpar').value //Capturando o valor inserido no input
  let resultado = document.getElementById('result') //variavel guarda o local onde vai ser mostrado o resultado
  let mensagem //mensagem que vai ser exibida no documento 
  
  if (valorInput % 2 === 0) {
    mensagem = `<p>O numero ${valorInput} é Par </p>`


  } else {
    mensagem = `<p>O numero ${valorInput} é Impar </p> `

  }
  
  resultado.innerHTML = mensagem.toUpperCase

 
}
//Função para exibir o resultado!

function exibirResultado() {
  let botão = document.getElementById('enviarNumero')

  botão.addEventListener('click', parouImpar);
}


function limparCampos(){
 
}

exibirResultado()

