import React from "react";
import { styled } from "styled-components";

export const Container = styled.label`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 10px 45px;
box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
&& > h2 {
    color: #f5f5f5;
    font-size: 2.5rem;
    margin: 2rem;
}
    `
