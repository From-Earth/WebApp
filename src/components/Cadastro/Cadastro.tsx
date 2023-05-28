
import './Cadastro.css';

import spinner from "../../assets/images/spinner.gif"
import { useState } from 'react';
import { UsuarioCadastro } from '../../model/UsuarioCadastro';
import { postCadastro } from '../../services/Usuario';
import { redirect, useNavigate } from 'react-router-dom';
import { ButtonClean } from '../Styled/Buttons';
import { Container } from '../Styled/Containers';
import { InputText, LabelText } from '../Styled/Inputs';


export function Cadastro () { 
    const [load, setLoad] = useState(false);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    
    
    const navigate = useNavigate ();
    
    function cadastrar () {

        if(senha !== confirmarSenha){
            alert("Confirme sua senha!")
        }else{
        const user = new  UsuarioCadastro(nome,email,confirmarSenha);
        console.log(user);
        setLoad(true)
        postCadastro(user).then(() => {alert("Cadastro realizado com sucesso!"); navigate("/login")}).finally(() => setLoad(false))
        }

        
    }
    return (
        <Container >
            <h2>Login</h2>
            <LabelText>Nome</LabelText>
            <InputText type='text' name='nome' placeholder='Digite o seu nome' autoComplete='off' required
            value={nome}
            onChange={(e) => setNome(e.target.value)}></InputText>

            <LabelText>Email</LabelText>
            <InputText type="email" name='email' placeholder='Digite o seu email'
            autoComplete='off' required
                value={email}
            onChange={(e) => setEmail(e.target.value)}></InputText>
            
             <LabelText>Senha</LabelText>
            <InputText type="password" name='senha' placeholder='Digite sua senha'
            autoComplete='off' required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            ></InputText>

            <LabelText>Confirmar Senha</LabelText>
            <InputText type="password" name='senha' placeholder='Digite sua senha'
            autoComplete='off' required
                value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            ></InputText>

            

            <button className='btn' type='submit' onClick={cadastrar}>Enviar</button>
            {load && (
                <img src={spinner}  width="30px"/>
            )}

            
            <ButtonClean onClick={() => navigate(-1)}>Voltar</ButtonClean>

        </Container>
    )
}

