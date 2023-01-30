import { useState } from "react";

export default function mouseix(){
    const [X, setx] = useState(0)

    const arrayY = useState(0)
    let Y = arrayY[0]
    const alterarY = arrayY[1]

    const belt = {
        backgroundColor:"#222",
        color:"#fafafa",
        height:"100vh",
        alignItems:"center",
        justifyContent:"center",
        display:"flex",
        flexDirection:"column",
        fontSize:"3rem",
        fontFamily:"monospace",
        
    }

    function whereMove(ev){
        setx(ev. clientX)
        alterarY(ev.clientY)
    }

    return(
        <div style={belt} onMouseMove={whereMove}>
            <span>Eixo X: {X}</span>
            <span>Eixo Y: {Y}</span>
        </div>
    )
}