import { useEffect, useState } from "react";
import { mega } from "../../function/mega"
import Conts2 from "../render/Conts2";

export default function contst(){
    const [qtde, setqtde] = useState(6)
    const [numero, setNumero] = useState([])

    useEffect(() => {
        setNumero(mega())
       }, [])

    function RenderNumero(){
        return numero.map(
            numero => <Conts2 key={numero} numero={numero} />
        )
    }

    return(
        <div style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
        }}>
            <h1 style={{
                fontFamily:"monospace",
                color:"#f00",
                fontSize:"3rem"}}>
                    Megas
                    </h1>

            <div style={{
                display:"flex",
                justifyContent:"center",
                flexWrap:"wrap",
            }}>
                {RenderNumero()}
            </div>

            <div>
                <input type="number" min={6} max={20} value={qtde} 
                onChange={ev => setqtde(ev.target.value)} />
                <button onClick={() => setNumero(mega(qtde))}>
                    Apostar
                </button>
            </div>
        </div>
    )
}