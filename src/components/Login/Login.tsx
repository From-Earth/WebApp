import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

export function Login () { 
    const navigate = useNavigate()
    return (
        <>
        <section className="login">
            <h2>Login</h2>
            <label>Email</label>
            <input type='email' name="email" placeholder='Digite o seu e-mail' autoComplete='off' required></input>
            <label>Senha</label>
            <input type='password' name='password' placeholder='Digite a sua senha' autoComplete='off' required></input>

            <button className='btn' type='submit'>Enviar</button>

            <h5>Ainda não possui cadastro conosco? <span onClick={()=> navigate("/Cadastro") }>Clique aqui</span> para se cadastrar!</h5>
        </section>

        </>
    )

}