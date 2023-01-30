import Titulo from "../components/titulo"

export default function usandoTitulo(){
    return(
        <div>
           <Titulo 
           principal = "Página de cadastro"
           secundário = "Incluir, alterar e excluir coisas " 
           pequeno = {true}
           />
           
           <Titulo 
           principal = "Página de login"
           secundário = "Digite seu e-mail e senha" 
           
           />

           <Titulo 
           principal = "crie sua conta aqui"
           secundário = "aproveite!"
           />
           
        </div>
    )
}