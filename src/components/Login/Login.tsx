import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/Usuario';
import { UsuarioLogin } from '../../model/UsuarioLogin';
import spinner from "../../assets/images/spinner.gif"
import { useUserStore } from '../../services/UserStore';
import { Container } from '../Styled/Containers';
import { InputText, LabelText } from '../Styled/Inputs';
import { Button, ButtonClean } from '../Styled/Buttons';

export function Login (){
    const [load, setLoad] = useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const setUser = useUserStore((state) => state.setUser);
    function login(){
        const user = new UsuarioLogin(email, password);
        setLoad(true);
        postLogin(user).then((resp) => {
            setUser(resp.id, resp.email,resp.token,resp.nome);
           navigate("/painel")
        }).catch(() => alert("Dados incorretos")).finally(() => {setLoad(false); })
    }

    return (
        <>
        <Container>
            <h2>Login</h2>
            <LabelText>Email</LabelText>
            <InputText type='email' name="email" placeholder='Digite o seu e-mail' autoComplete='off' required value={email} onChange={e => setEmail(e.target.value)}></InputText>
            <LabelText>Senha</LabelText>
            <InputText type='password' name='password' placeholder='Digite a sua senha' autoComplete='off' required value={password} onChange={e => setPassword(e.target.value)}></InputText>

            <Button className='btn' type='submit' onClick={login}>Enviar</Button>
            {load && (
                <img src={spinner}  width="30px"/>
            )}
            
            <ButtonClean onClick={() => navigate("/home")}>Voltar</ButtonClean>
            <h5>Ainda não possui cadastro conosco? <span onClick={()=> navigate("/Cadastro") } style={{color: "floralwhite", textDecoration : "underline"}}>Clique aqui</span> para se cadastrar!</h5>
        </Container>

        </>
    )

}

