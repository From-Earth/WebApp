import { useEffect, useRef, useState } from "react";
import "./UserEdit.css";

import spinner from "../../../assets/images/spinner.gif";
import { getUser } from "../../../services/Usuario";
import { useParams } from "react-router-dom";

export default function UserEdit() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [load, setLoad] = useState(false);
  const [data, setData] = useState<Usuario | null>(null);
  let {id} = useParams();

  useEffect(() => {
    setLoad(true);
    getUser(id)
      .then((resp) => setData(resp))
      .catch(() => alert("Usuario não encontrado")).finally(() => setLoad(false));

    
  }, []);

  function editar() {}
  return (
    <section className="edit">
      {data && (
        <>
          <h2>Alterar Dados</h2>

          <label>Nome</label>
          <input
            type="nome"
            name="nome"
            placeholder="Digite o seu nome"
            autoComplete="off"
            required
            value={data.nome}
            defaultValue={nome}
            onChange={(e) => setNome(e.target.value)}
          ></input>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            autoComplete="off"
            required
            value={data.email}
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label>Telefone</label>
          <input
            type="telefone"
            name="telefone"
            placeholder="Digite o seu telefone"
            autoComplete="off"
            required
            value={data.telefone}
            defaultValue={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          ></input>
          <label>Senha</label>
          <input
            type="senha"
            name="senha"
            placeholder="Digite o seu senha"
            autoComplete="off"
            required
            value={data.senha}
            defaultValue={senha}
            onChange={(e) => setSenha(e.target.value)}
          ></input>

          <button className="btn" type="submit" onClick={editar}>
            Editar
          </button>
        </>
      )}
      {load && <img src={spinner} width="30px" />}
    </section>
  );
}
