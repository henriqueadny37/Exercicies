function gerarLista(){
    return (
        <div>
            <span>1,</span>
            <span>2,</span>
            <span>3,</span>
            <span>4,</span>
            <span>5</span>
        </div>
    ) 
}

export default function lista1(){
    return (
        <div>
            {gerarLista()}
        </div>
    )
}
