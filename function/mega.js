 export function mega(qtde = 6, numeros = []){
    console.log(numeros)
    if(qtde < 6 && qtde > 60){
        throw "Números inválidos"
    }
    // PRIMEIRA CONDIÇÃO DE PARADA, CASO O USUÁRIO PASSE UMA QUANTIDADE INVÁLIDA
    if(numeros.length === qtde){
        // A quantidade de número do array, tem quer ser igual (=== qtde)
        // a quantidade de numeros que eu quero gerar
        return numeros.sort((n1, n2) => n1 - n2)
    }
    // segunda condição de parada (oficial), que é a quantidade de números geardas com a quantidade de numeros pedidas

    const numeroAleatorio = parseInt(Math.random() * 60) + 1
        if(!numeros.includes(numeroAleatorio)){
            return mega(qtde, [...numeros, numeroAleatorio])

        } else{
            return mega(qtde, numeros)
        }
}

