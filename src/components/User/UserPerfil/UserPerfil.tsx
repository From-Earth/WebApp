import React from "react";
import { useUserStore } from "../../../services/UserStore";
import styled  from "styled-components";
import { Button } from "../../Styled/Buttons";
import { useNavigate } from "react-router-dom";

export default function UserPerfil(){
    const navigate = useNavigate();
    
    const user = useUserStore(state => state);
    return (
        <Container>
            <Title>Olá, {user.nome}!</Title>

            <Button onClick={() => navigate(`/painel/edit/${user.id}`)}>Alterar meus dados</Button>
            <Button onClick={() => navigate(`/painel/excluir/${user.id}`)}>Excluir minha conta</Button>
            
        </Container>
    )
}

const Container = styled.section`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 10px 45px;
box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`

const Title = styled.h2`
color: #f5f5f5; 

`