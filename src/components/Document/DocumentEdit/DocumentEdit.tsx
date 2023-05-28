import { useEffect, useState } from "react";
import { Documento } from "../../../model/Documento";
import { Container } from "../../Styled/Containers";
import { InputText, LabelText } from "../../Styled/Inputs";
import { Button, ButtonClean } from "../../Styled/Buttons";
import { useNavigate, useParams } from "react-router-dom";
import { getDocumentoId, putDocumento } from "../../../services/Documentos";
import spinner from "../../../assets/images/spinner.gif";
import { DocumentoAtualiza } from "../../../model/DocumentoAtualiza";

export default function DocumentEdit() {
  const [data, setData] = useState<Documento | null>(null);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [isPublic, setisPublic] = useState(true);
  const [load, setLoad] = useState(false);
  let { id } = useParams();
  const navigate = useNavigate ();
  useEffect(() => {
    getDocument();
  }, []);

  function handleChange(field: string, value: string) {
    if (data) {
      const newUser = { ...data, [field]: value };
      setData(newUser);
    }
  }

  function getDocument() {
    setLoad(true);
    if (id) {
      getDocumentoId(id)
        .then((resp) => {
          setData(resp);
        })
        .catch(() => alert("Usuario não encontrado"))
        .finally(() => setLoad(false));
    }
  }

  function updateDoc(){
    if(data){
      setLoad(true)
      const doc = new DocumentoAtualiza(data);
      putDocumento(doc).catch(() => alert("erro")).then(() => {alert("Livro atualizado com sucesso!"); getDocument()}).finally(() => setLoad(false))
    }
  }
  return (
    <Container>
      {data && (
        <>
          <h2>Editar Livro</h2>

          <LabelText>Nome</LabelText>
          <InputText
            type="text"
            value={data?.nome}
            defaultValue={nome}
            onChange={(e) => handleChange("nome", e.target.value)}
          />

          <LabelText>Descrição</LabelText>
          <InputText
            type="text"
            value={data?.descricao}
            defaultValue={descricao}
            onChange={(e) => handleChange("descricao", e.target.value)}
          />

          <LabelText>Marque o aceite para tornar seu livro público</LabelText>
          <InputText
            type="checkbox"
            defaultChecked={data?.publico}
            onClick={(e) => handleChange("publico", e.target.value)}
          />

          <Button onClick={updateDoc} type="submit">Salvar</Button>

          <Button onClick={() => navigate(`/painel/livro/excluir/${data.id}`)}>Excluir livro</Button>
          <ButtonClean onClick={() => navigate(-1)}>Voltar</ButtonClean>

        </>
      )}
      
      {load && <img src={spinner} width="30px" />}
    </Container>
  );
}
