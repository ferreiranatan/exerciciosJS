7 //Escreva uma função que recebe um número inteiro positivo, e exiba mostre soma de todos os números menores que ele

const botao = document.getElementById('submit')
const res = document.getElementById('resposta')

const soma = () => {
    const input = parseInt(document.getElementById('valor').value)
    let lista = [input]
    if (!isNaN(lista) && lista > 0) {
        for(let n = 1; n < lista;n++){
            let total = 0
            total += n;
            res.innerHTML = total
        }
        
    }
        

}

const mostrarResultado = () =>{
    botao.addEventListener('click', soma)

}

mostrarResultado()