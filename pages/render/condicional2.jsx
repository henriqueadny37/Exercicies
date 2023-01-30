import Voodoo from "../Components/Voodoo";

export default function condicional2(){
        const numero = 8
    return(
        <div style={{
            color: "#f00",
            fontFamily:"sans-serif",
            textAlign:"center",
            fontSize:"20px",
        }}>
            <Voodoo teste={numero % 2 === 0}>
               <h1>O número {numero} é par</h1>
            </Voodoo>

            <Voodoo teste={numero % 2 === 1}>
               <h1>O número {numero} é impar</h1>
            </Voodoo>
        </div>
    )
}