
import './Upload.css';
import spinner from "../../../assets/images/spinner.gif"
import { ChangeEvent, useState } from 'react';
import { UsuarioCadastro } from '../../../model/UsuarioCadastro';
import { postCadastro } from '../../../services/Usuario';
import { redirect, useNavigate } from 'react-router-dom';
import { postDocumento } from '../../../services/Documentos';
import { useUserStore } from '../../../services/UserStore';
import DocumentEdit from '../DocumentEdit/DocumentEdit';
import { Documento } from '../../../model/Documento';
import { Button, ButtonClean } from '../../Styled/Buttons';
import UserEdit from '../../User/UserEdit/UserEdit';
import { Container } from '../../Styled/Containers';
import { InputFile, InputText, LabelText } from '../../Styled/Inputs';


export function Upload () { 
    const [load, setLoad] = useState(false);
    const [arquivo, setArquivo] = useState<File | null>(null);    
    const [doc, setDoc] = useState<Documento | null>(null);    
    const user = useUserStore(state => state);
    const navigate = useNavigate();
    

    
    const addArquivo = (event: ChangeEvent<HTMLInputElement>) => {
      
        const file = event.target.files?.[0];
        setArquivo(file || null);
      };
    
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
        <Container>
            <h2>Faça o Upload do livro</h2>
            <LabelText>Nome</LabelText>
            <InputFile type='file' name='arquivo'
            onChange={addArquivo} style={{color: "fff"}} onClick={() =>setDoc(null)}></InputFile>
            
            <Button className='btn' type='submit' onClick={cadastrar}>Enviar</Button>
            
            {doc && (
                <>
                 <Button onClick={() => navigate(`edit/${doc.id}`)}>Editar livro enviado</Button>
                 </>
            )}

            {load && (
                <img src={spinner}  width="30px"/>
            )}
            <ButtonClean onClick={() => navigate(-1)}>Voltar</ButtonClean>
           
        </Container>
    )
}

