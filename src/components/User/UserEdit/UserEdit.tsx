import { useEffect, useRef, useState } from "react";
import "./UserEdit.css";

import spinner from "../../../assets/images/spinner.gif";
import { getUser } from "../../../services/Usuario";

export default function UserEdit() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [load, setLoad] = useState();
  const [data, setData] = useState([])


  function editar(){}
  return (
    <section className="edit">
      <h2>Alterar Dados</h2>

      <label>Nome</label>
      <input
        type="nome"
        name="nome"
        placeholder="Digite o seu nome"
        autoComplete="off"
        required
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      ></input>
      <label>Email</label>
      <input
        type="email"
        name="email"
        placeholder="Digite o seu e-mail"
        autoComplete="off"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <label>Telefone</label>
      <input
        type="telefone"
        name="telefone"
        placeholder="Digite o seu telefone"
        autoComplete="off"
        required
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      ></input>
      <label>Senha</label>
      <input
        type="senha"
        name="senha"
        placeholder="Digite o seu senha"
        autoComplete="off"
        required
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      ></input>

<button className='btn' type='submit' onClick={editar}>Editar</button>
            {load && (
                <img src={spinner}  width="30px"/>
            )}
    </section>
  );
}
