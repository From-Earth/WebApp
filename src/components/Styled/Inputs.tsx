import React from "react";
import  styled  from "styled-components";

export const LabelText = styled.label`
    color: #f5f5f5;
    font-size: 17px;
    margin-bottom: 4px;
    `

export  const InputText = styled.input`
padding: 15px;
    outline: none;
    border: 0;
    margin-bottom: 20px;
    font-size: 15px;
    width: 200px;
    transition: all 0.5s;
    color: black !important;
`

export  const InputFile = styled.input`
    padding: 15px;
    outline: none;
    border: 0;
    margin-bottom: 20px;
    font-size: 15px;
    width: 200px;
    transition: all 0.5s;
    color: #fff;

    @media(min-width:460px){
            width: 430px;
    }
`