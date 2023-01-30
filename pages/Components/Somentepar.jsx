export default function Somentepar(props){

    const numeropar = props.numero % 2 === 0
    return(
        <div>
          {numeropar ?
          <span>{props.numero}</span> :
          null 
          }
        </div>
    )

    // const numeropar = props.numero % 2 === 0
    // return numeropar ? <span>{props.numero}</span> : null




    // if(props.numero % 2 === 0){
    //     // ^ cujo numero, o resto(%) da divisão de 2 for zero, dar um numero par
    //     return <span>{props.numero}</span>
    // } else {
    //     return null
    // }
}