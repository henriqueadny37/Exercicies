import Item from "../Components/Item";
import Listex from "../Components/Listex";

export default function CompoChil(){

  return (
    <div>
      <Listex>
      <Item conteudo="item #01" />
        <Item conteudo="item #02" />
        <Item conteudo="item #03" />
        <Item conteudo="item #11" />
        <Item conteudo="item #12" />
        <Item conteudo="item #14" />
      </Listex>
    </div>
  )
}