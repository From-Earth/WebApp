import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Delete.css";
import spinner from "../../assets/images/spinner.gif";
import { deleteUser } from "../../services/Usuario";
import { useUserStore } from "../../services/UserStore";

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
    <section className="delete">
      <h2>Excluir conta</h2>

      <p>Deseja excluir a sua conta?</p>
      <button className="btn" type="submit" onClick={excluir}>
        Excluir conta
      </button>
      <button className="btn" type="submit" onClick={() => navigate("/painel")}>
        Cancelar
      </button>

      {load && <img src={spinner} width="30px" />}
    </section>
  );
}
