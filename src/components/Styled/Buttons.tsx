import React from "react";
import styled from "styled-components";

export  const Button = styled.button`
padding: 15px;
    cursor: pointer;
    font-size: 16px;
    background: #1B2635;
    border: 2px solid #f5f5f5;
    color: #f5f5f5;
    transition: all 1s;
    margin-bottom: 20px;
    &&:hover{
        background: #f5f5f5;
    color: #101026;
    border-radius: 16px;
    }
`

export  const ButtonClean = styled.button`    
    cursor: pointer;
    font-size: 16px;
    background: transparent;
    border: 0;
    color: #fff;
    &&:hover{
    color: #101026;
    }

    && > img, svg{
        width: 20px;        
        height: 20px;
        fill: #fff;

    }
`
