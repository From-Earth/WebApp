import { useEffect, useState } from "react";
import { Documento } from "../../../model/Documento";
import { Container } from "../../Styled/Containers";
import { InputText, LabelText } from "../../Styled/Inputs";
import { Button } from "../../Styled/Buttons";

export default function DocumentEdit(props: {doc: Documento}) {
  const [data, setData] = useState<Documento | null>(null);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [isPublic, setisPublic] = useState(true);
  useEffect(() => {
    setData(props.doc);
  }, [props.doc]);

  function handleChange(field: string, value: string) {
    if (data) {
      const newUser = { ...data, [field]: value };
      setData(newUser);
    }
  }
  return (
    <Container>
      <h2>Editar Livro</h2>

      <LabelText>Nome</LabelText>
      <InputText type="text"  value={data?.nome} defaultValue={nome} onChange={e => handleChange("nome", e.target.value)}/>

      <LabelText>Descrição</LabelText>
      <InputText type="text" value={data?.descricao}  defaultValue={descricao} onChange={e => handleChange("descricao", e.target.value)}/>

      <LabelText>Marque o aceite para tornar seu livro público</LabelText>
      <InputText type="checkbox" value={data?.publico}  defaultChecked={isPublic} onChange={e => handleChange("publico", e.target.value)}/>

      <Button>Alterar dados</Button>
    </Container>
  );
}
