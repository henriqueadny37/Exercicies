export default function Listex(props) {
  
  return(
    <div>
        <h1 style={{
          color:"#ff0000",
          fontFamily:"Arial",
          textAlign:"center",
        }}>
          Lista de algo
        </h1>
      <ul style={{
        listStyle:"none",
        padding:"0",
        fontSize:"30px",
        textAlign:"center",
        fontFamily:"Arial",
      }}>
        {props.children}
      </ul>
    </div>
  )
}