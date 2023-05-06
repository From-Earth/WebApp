import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Delete.css';


export function Delete () {

    const navigate = useNavigate();
    return (
        <section>
            <p>Deseja excluir a sua conta? <span onClick={()=> navigate("/Home") }>Clique aqui</span></p>
        </section>

    )
}