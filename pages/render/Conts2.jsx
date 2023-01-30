export default function Conts2(props){
    return(
        <div style={{
            fontFamily:"Arial",
            width:"100px",
            height:"100px",
            borderRadius:"100px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            fontSize:"2rem",
            fontFamily:"monospace",
            backgroundColor:"#f00",
            color:"#ff0",
            margin:"10px",
        }}>
            {props.numero}
        </div>
    )
}