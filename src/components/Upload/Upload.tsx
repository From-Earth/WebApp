
import './Upload.css';

import spinner from "../../assets/images/spinner.gif"
import { ChangeEvent, useState } from 'react';
import { UsuarioCadastro } from '../../model/UsuarioCadastro';
import { postCadastro } from '../../services/Usuario';
import { redirect, useNavigate } from 'react-router-dom';
import { postDocumento } from '../../services/Documentos';
import { useUserStore } from '../../services/UserStore';


export function Upload () { 
    const [load, setLoad] = useState(false);
    const [arquivo, setArquivo] = useState<File | null>(null);    
    const user = useUserStore(state => state);
    
    const addArquivo = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setArquivo(file || null);
      };
    const navigate = useNavigate ();
    
    function cadastrar () {
        if(!user.id){
            alert('teste')
        }

        if(!arquivo){
            alert("Nenhum arquivo selecionado!")
            return;
        }

        setLoad(true)
      postDocumento("2", arquivo).then(() => {

        setArquivo(null)
        document.querySelector('input[type=file]')!.value = ''; 
        alert("Livro enviado com sucesso!")
      }).finally(() => setLoad(false))

        
    }
    return (
        <section className='upload'>
            <h2>Faça o Upload do livro</h2>
            <label>Nome</label>
            <input type='file' name='arquivo'
            onChange={addArquivo}></input>

            
            <button className='btn' type='submit' onClick={cadastrar}>Enviar</button>
            {load && (
                <img src={spinner}  width="30px"/>
            )}

        </section>
    )
}

