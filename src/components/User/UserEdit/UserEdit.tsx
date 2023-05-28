import { useEffect, useRef, useState } from "react";
import "./UserEdit.css";

import spinner from "../../../assets/images/spinner.gif";
import { getUser, putUser } from "../../../services/Usuario";
import { useNavigate, useParams } from "react-router-dom";
import { Usuario } from "../../../model/Usuario";
import { Button, ButtonClean } from "../../Styled/Buttons";
import { Container } from "../../Styled/Containers";
import { InputText, LabelText } from "../../Styled/Inputs";

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
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  function getUserById() {
    setLoad(true);
    if (id) {
      getUser(id)
        .then((resp) => {setData(resp)})
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
    <Container className="edit">
      {data && (
        <>
          <h2>Alterar Dados</h2>

          <LabelText>Nome</LabelText>
          <InputText
            type="text"
            name="nome"
            placeholder="Digite o seu nome"
            autoComplete="off"
            required
            value={data.nome}
            defaultValue={nome}
            onChange={(e) => handleChange("nome", e.target.value)}
          ></InputText>
          <LabelText>Email</LabelText>
          <InputText
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            autoComplete="off"
            required
            value={data.email}
            defaultValue={email}
            onChange={(e) => handleChange("email", e.target.value)}
          ></InputText>
          <LabelText>Telefone</LabelText>
          <InputText
            type="text"
            name="telefone"
            placeholder="Digite o seu telefone"
            autoComplete="off"
            required
            value={data.telefone}
            defaultValue={telefone}
            onChange={(e) => handleChange("telefone", e.target.value)}
          ></InputText>
          <LabelText>Senha</LabelText>
          <InputText
            type="password"
            name="senha"
            placeholder="Digite o seu senha"
            autoComplete="off"
            required
            value={data.senha}
            defaultValue={senha}
            onChange={(e) => handleChange("senha", e.target.value)}
          ></InputText>

          <Button className="btn" type="submit" onClick={editar}>
            Editar
          </Button>
          
          <ButtonClean onClick={() => navigate(-1)}>Voltar</ButtonClean>
        </>
      )}
      {load && <img src={spinner} width="30px" />}
    </Container>
  );
}
