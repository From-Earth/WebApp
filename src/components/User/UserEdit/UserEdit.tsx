import { useEffect, useRef, useState } from "react";
import "./UserEdit.css";

import spinner from "../../../assets/images/spinner.gif";
import { getUser, putUser } from "../../../services/Usuario";
import { useParams } from "react-router-dom";
import { Usuario } from "../../../model/Usuario";

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
  let { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  function getUserById() {
    setLoad(true);
    if (id) {
      getUser(id)
        .then((resp) => setData(resp))
        .catch(() => alert("Usuario não encontrado"))
        .finally(() => setLoad(false));
    }
  }

  function handleChange(field: string, value: string) {
    if (data) {
      const newUser = { ...data, [field]: value };
      setData(newUser);
    }
  }

  function editar() {
    setLoad(true);
    console.log(data)
    if (data) {
      putUser(data)
        .then(() => {
          alert("Dados atualizados com sucesso!");
          getUserById();
        })
        .finally(() => setLoad(false));
    }
  }
  return (
    <section className="edit">
      {data && (
        <>
          <h2>Alterar Dados</h2>

          <label>Nome</label>
          <input
            type="text"
            name="nome"
            placeholder="Digite o seu nome"
            autoComplete="off"
            required
            value={data.nome}
            defaultValue={nome}
            onChange={(e) => handleChange("nome", e.target.value)}
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
            onChange={(e) => handleChange("email", e.target.value)}
          ></input>
          <label>Telefone</label>
          <input
            type="text"
            name="telefone"
            placeholder="Digite o seu telefone"
            autoComplete="off"
            required
            value={data.telefone}
            defaultValue={telefone}
            onChange={(e) => handleChange("telefone", e.target.value)}
          ></input>
          <label>Senha</label>
          <input
            type="password"
            name="senha"
            placeholder="Digite o seu senha"
            autoComplete="off"
            required
            value={data.senha}
            defaultValue={senha}
            onChange={(e) => handleChange("senha", e.target.value)}
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
