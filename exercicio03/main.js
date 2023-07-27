// // Escreva uma função que lê o ano de nascimento de uma pessoa. 
// Mostre uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).

function votaOuNao(n){
    let anoAtual = new Date().getFullYear()
    let idade = anoAtual - n
    
    if(typeof Number != n || n > anoAtual){
        return 'Insira um valor válido'
    }

    if (idade >= 16){
        return `Você tem ${idade} anos de idade e nesse ano de ${anoAtual} e você podera votar!`
    }else if(idade < 16 ){
        return `Você tem ${idade} anos de idade e você ainda não pode votar!!`
    }
}

console.log(votaOuNao());//Passe o ano de nascimento como parametro