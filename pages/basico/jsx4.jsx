export default function jsx4 (){
    const subtitulo = "Estou no JavaScript!"
    const trecho = <h2>{3 * 3}</h2>
  // expressão ()//
  //para fazer uma integração entre javascript e jsx posso  utilizar um par de chaves{}//
  //no caso para acessar o JS use os {}//
    return (
        <div>
            <h1>Integração js e jsx</h1>
            <h2>{subtitulo}</h2>
            <h2>{trecho}</h2>
            <h3>{Math.max(13, 10)}</h3>
            <h3>{entre(9.6, 1, 10)}</h3>
        </div>
    )
}
function entre (valor, min, max){
    if(valor > min && valor < max){
        return "sim"
    } else{
        return "não"
    }
}