export default function Estilo(props){
    
    // const Estilo = {{backgroundColor: props.numero >= 0 ? "#008000" : "#f00",
    // color: props.color,
    // textAlign: props.direita ?  "right" : "left",
    // textAlign: props.center ? "center" : "right",
    // padding: props.preenchimento ? "10px" : "25px",
    // borderRadius: props.raio ? "10px" : "5px" 
    //  }} A DESVANTAGEM EM FAZER ISSO COM O CONST (de preferencia) PORQUE ELE NÃO VAI COMPLETAR AUTOMATICAMENTE
    // POIS ELE NÃO SABE QUE VOCE ESTÁ CRIANDO UM OBJETO QUE REPRESENTA O CSS
    return(
        <div>
            <h1 style={{backgroundColor: props.numero >= 0 ? "#008000" : "#f00",
                    color: props.color,
                    textAlign: props.direita ?  "right" : "left",
                    textAlign: props.center ? "center" : "right",
                    padding: props.preenchimento ? "10px" : "25px",
                    borderRadius: props.raio ? "10px" : "5px" 
                    }}>
                Texto
            </h1>
        </div>
    )
}