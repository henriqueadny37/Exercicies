import { useState } from "react"
import Conts2 from "../../render/Conts2"

export default function conts(){
    const [numero, setX] = useState(0) 

    function sob(){
        setX(numero + 1)
    }

    function dec(){
        setX(numero - 1)
    }

    const soso = {
        fontfamily:"serif",
        color:"green",
    }
    const espace = {
        padding:"5px",
    }
    return(
        <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            fontSizeAdjust:"2rem",
        }}>
            <h1 style={soso}>Quantia</h1>
            <Conts2 numero={numero} />
            <div>
            <button style={espace} onClick={sob}>+</button>
            <button style={espace} onClick={dec}>-</button>
            </div>
        </div>
    )
    }