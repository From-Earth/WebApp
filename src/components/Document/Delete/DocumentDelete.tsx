import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import spinner from "../../../assets/images/spinner.gif";
import { Button } from "../../Styled/Buttons";
import { Container } from "../../Styled/Containers";
import { deleteDocumento } from "../../../services/Documentos";

export function DocumentDelete() {
  const [load, setLoad] = useState(false);
  let { id } = useParams();
  const navigate = useNavigate();  
  function excluir() {
    if (id) {
      setLoad(true);
      deleteDocumento(id)
        .then(() => {
          alert("Livro excluido com sucesso!");
          navigate("/painel");
        })
        .catch(() => {
          alert("Erro interno. Tente novamente mais tarde!");
          navigate(-1);
        })
        .finally(() => setLoad(false));
    }
  }
  return (
    <Container>
      <h2>Excluir Livro</h2>

      <p>Deseja excluir seu livro?</p>
      <Button className="btn"  onClick={excluir}>
        Sim
      </Button>
      <Button className="btn" onClick={() => navigate(-1)}>
        Cancelar
      </Button>

      {load && <img src={spinner} width="30px" />}
    </Container>
  );
}
