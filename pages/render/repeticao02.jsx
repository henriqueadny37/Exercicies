import listaproducts from "../../data/listaproducts"


export default function repetica02(){

    const comBorda = {
        border: "1px solid #000",
    }
    
    function renderizarListas(){
        return listaproducts.map(produto => {
            return(
                <tr key={produto.id}>
                    <td style={comBorda}>{produto.id}</td>
                    <td style={comBorda}>{produto.nome}</td>
                    <td style={comBorda}>{produto.preco}</td>
                </tr>
            )
        })
    }

   return(
    <div>
        <table style={{
            border: "1px solid #000"
        }}>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {renderizarListas()}
            </tbody>
        </table>
    </div>
   )
  
}