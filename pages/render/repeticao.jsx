export default function repeticao() {
    const ListaAprovados = [
        'Maria',
        'João',
        'Erick',
        'Gusmão',
        'Bia'
    ]
          function RenderListas(){
    
             return ListaAprovados.map(function(nome, i){
                return <li key={i}>{nome}</li>
             })
         }
    return (
        <ul>
           {RenderListas()}
        </ul>
    )
}



  //  function RenderListas(){
  //      const itens = []

  //      for (let i = 0; i < ListaAprovados.length; i++){
  //          itens.push(<li key={i}>{ListaAprovados[i]}</li>)
  //      }
 //       return itens
 //   }