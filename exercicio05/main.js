5// Escreva uma função que leia um número inteiro de 1 a 7 e informe o dia da semana correspondente, sendo domingo o dia de número 1. Se o número não corresponder a um dia da semana, mostre uma mensagem de erro.







function mostrarDia() {
    event.preventDefault()

    //Variaveis para capturar o valor
    let valor = document.getElementById('valorDeEntrada').value
    let resposta = document.getElementById('resposta')


    switch (valor) {
        case "1":
            resposta.innerHTML = 'Domingo'
            break;

        case "2":
            resposta.innerHTML = "Segunda-Feira";
            break;

        case "3":
            resposta.innerHTML = "Terça-Feira";
            break

        case "4":
            resposta.innerHTML = "Quarta-Feira";
            break;

        case "5":
           resposta.innerHTML = "Quinta-Feira"
            break;
        case "6":
           resposta.innerHTML = "Sexta-Feira";
            break;
        case "7":
            resposta.innerHTML = "Sabado"
            break;

        default:
           resposta.innerHTML = "Insira um valor válido"
            break
    }

}


function mostrarNaDiv(){
    
let botao = document.getElementById('submit')

   return botao.addEventListener('click', mostrarDia)
}

mostrarNaDiv()
