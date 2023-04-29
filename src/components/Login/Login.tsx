import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/Usuario';
import { UsuarioLogin } from '../../model/UsuarioLogin';
import spinner from "../../assets/images/spinner.gif"

export function Login (){
    const [load, setLoad] = useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");    
    function login(){

        const user = new UsuarioLogin(email, password);
        setLoad(true);
        postLogin(user).then(() => navigate("/painel")).catch(() => alert("Dados incorretos")).finally(() => {setLoad(false); })
    }
    return (
        <>
        <section className="login">
            <h2>Login</h2>
            <label>Email</label>
            <input type='email' name="email" placeholder='Digite o seu e-mail' autoComplete='off' required value={email} onChange={e => setEmail(e.target.value)}></input>
            <label>Senha</label>
            <input type='password' name='password' placeholder='Digite a sua senha' autoComplete='off' required value={password} onChange={e => setPassword(e.target.value)}></input>

            <button className='btn' type='submit' onClick={login}>Enviar</button>
            {load && (
                <img src={spinner}  width="30px"/>
            )}

            <h5>Ainda não possui cadastro conosco? <span onClick={()=> navigate("/Cadastro") }>Clique aqui</span> para se cadastrar!</h5>
        </section>

        </>
    )

}

