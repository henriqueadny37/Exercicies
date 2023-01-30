export default function Titulo(info){
    
    return info.pequeno ? (
        <>
        <p>{info.principal}</p>
        <p>{info.secundário}</p>
        
        </>
    ) : (
        <>
        <h1>{info.principal}</h1>
        <h2>{info.secundário}</h2>
        </>
    )
}