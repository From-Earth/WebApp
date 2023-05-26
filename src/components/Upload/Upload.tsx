
import './Upload.css';

import spinner from "../../assets/images/spinner.gif"
import { ChangeEvent, useState } from 'react';
import { UsuarioCadastro } from '../../model/UsuarioCadastro';
import { postCadastro } from '../../services/Usuario';
import { redirect, useNavigate } from 'react-router-dom';
import { postDocumento } from '../../services/Documentos';
import { useUserStore } from '../../services/UserStore';
import DocumentEdit from '../Document/DocumentEdit/DocumentEdit';
import { Documento } from '../../model/Documento';
import { Button } from '../Styled/Buttons';
import UserEdit from '../User/UserEdit/UserEdit';


export function Upload () { 
    const [load, setLoad] = useState(false);
    const [arquivo, setArquivo] = useState<File | null>(null);    
    const [doc, setDoc] = useState<Documento | null>(null);    
    const user = useUserStore(state => state);
    const [open, setOpen] = useState(false)
    
    const addArquivo = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setArquivo(file || null);
      };
    const navigate = useNavigate ();
    
    function cadastrar () {
        if(!arquivo){
            alert("Nenhum arquivo selecionado!")
            return;
        }

        setLoad(true)
      postDocumento(user.id.toString(), arquivo).then((resp:Documento) => {
        setDoc(resp);
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
            onChange={addArquivo} onClick={() => setDoc(null)}></input>

            
            <button className='btn' type='submit' onClick={cadastrar}>Enviar</button>
            {load && (
                <img src={spinner}  width="30px"/>
            )}
            {doc &&(
              <>
              <Button  onClick={() => setOpen(true)}>Editar livro enviado</Button>
              <Button onClick={() => navigate("/painel")}>Volta para o painel</Button>
              </>
            )

            }
            {open &&(
              <>
               <DocumentEdit doc={doc} /> 
              </>
            )}
        </section>
    )
}

