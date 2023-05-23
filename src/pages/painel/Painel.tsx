import { useEffect, useState } from "react";
import { getDocumentos } from "../../services/Documentos";
import Card from "../../components/Card/Card";
import "./Painel.css";
import { Documento } from "../../model/Documento";
import { Button } from "../../components/Styled/Buttons";
import { useNavigate } from "react-router-dom";
import spinner from "../../assets/images/spinner.gif"

export default function Painel() {
  const [documentos, setDocumentos] = useState<Documento[]>([]);
  const [load, setLoad] = useState(true);  
  const navigate = useNavigate();
  useEffect(() => {
    if (documentos.length == 0) {
      getDocumentos()
        .then(resp => setDocumentos(resp.content))
        .catch((err) => console.log(err))
        .finally(() => setLoad(false));
    }
    console.log(documentos);
  }, []);
  return (
    <div className="c-home">
      <div className="c-home__button">
        <Button onClick={() => navigate("livro")}>Adicionar Livro</Button>
      </div>
      <div className="c-home__list">
        {load && <img src={spinner}  width="30px"/>}
        {documentos.length > 0 && (
          <>
            {documentos.map((item: Documento) => {
              return (
                <Card
                description={item.usuario.descricao}
                  id={item.id}
                  author={item.usuario.nome}
                  name={item.nome}
                  progress={item.progresso}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
