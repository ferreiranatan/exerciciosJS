const botao = document.getElementById('submit')


const mostrarImpar = () => {
    const valorSaida = document.getElementById('resposta')
    const valores = parseInt(document.getElementById('valor').value)
    let resultado = []
    if (!isNaN(valores)) {
        resultado.length = 0
        for (let n = 0; n < valores; n++) {
            if (n % 2 == 1) {
                resultado.push(n)
                valorSaida.innerHTML = resultado.join(', ')
            }
        }
    }

  

}

const enviarResult = () => {
    botao.addEventListener('click', mostrarImpar)


}



enviarResult()
mostrarImpar()