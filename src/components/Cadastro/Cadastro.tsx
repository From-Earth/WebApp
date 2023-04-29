
import './Cadastro.css';

import spinner from "../../assets/images/spinner.gif"
import { useState } from 'react';


export function Cadastro () { 
    const [load, setLoad] = useState(false);
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [telefone, setTelefone] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [data, setData] = useState([])
    
    function cadastrar () {

    }
    return (
        <section className='principal'>
            <h2>Login</h2>
            <label>Nome</label>
            <input type='text' name='nome' placeholder='Digite o seu nome' autoComplete='off' required
            value={nome}
            onChange={(e) => setNome(e.target.value)}></input>

            <label>Email</label>
            <input type="email" name='email' placeholder='Digite o seu email'
            autoComplete='off' required
                value={email}
            onChange={(e) => setEmail(e.target.value)}></input>
            
            <label>CPF</label>
            <input type="text" name='cpf' placeholder='Digite o seu CPF'
            autoComplete='off' required
                value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            ></input>

             <label>Logradouro</label>
            <input type="text" name='endereço' placeholder='Digite o seu Endereço'
            autoComplete='off' required
                value={logradouro}
            onChange={(e) => setLogradouro(e.target.value)}
            ></input>

             <label>Número do Logradouro</label>
            <input type="text" name='número' placeholder='Digite o número'
            autoComplete='off' required
                value={numero}
            onChange={(e) => setNumero(e.target.value)}
            ></input>

             <label>Complemento</label>
            <input type="text" name='complemento' placeholder='Digite o complemento'
            autoComplete='off' required
                value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
            ></input>

             <label>Senha</label>
            <input type="password" name='senha' placeholder='Digite sua senha'
            autoComplete='off' required
                value={senha}
            onChange={(e) => setSenha(e.target.value)}
            ></input>

             <label>Telefone</label>
            <input type="tel" name='telefone' placeholder='Digite o seu telefone'
            autoComplete='off' required
                value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            ></input>

            <button className='btn' type='submit' onClick={cadastrar}>Enviar</button>
            {load && (
                <img src={spinner}  width="30px"/>
            )}

        </section>
    )
}

