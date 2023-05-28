import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Delete.css";
import spinner from "../../assets/images/spinner.gif";
import { deleteUser } from "../../services/Usuario";
import { useUserStore } from "../../services/UserStore";
import { Button } from "../Styled/Buttons";
import { Container } from "../Styled/Containers";

export function Delete() {
  const [load, setLoad] = useState(false);
  let { id } = useParams();
  const navigate = useNavigate();  
  const user = useUserStore(state => state);
  function excluir() {
    if (id) {
      setLoad(true);
      deleteUser(id)
        .then(() => {
          navigate("/home");
          alert("Conta excluida com sucesso!");
          user.clean();
        })
        .catch(() => {
          alert("Erro interno. Tente novamente mais tarde!");
          navigate("/home");
        })
        .finally(() => setLoad(false));
    }
  }
  return (
    <Container>
      <h2>Excluir conta</h2>

      <p>Deseja excluir a sua conta?</p>
      <Button className="btn" type="submit" onClick={excluir}>
        Sim
      </Button>
      <Button className="btn" type="submit" onClick={() => navigate("/painel")}>
        Cancelar
      </Button>

      {load && <img src={spinner} width="30px" />}
    </Container>
  );
}
