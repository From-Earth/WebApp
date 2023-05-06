import React from "react"
import "./Header.css";
import { useNavigate } from "react-router-dom";
export default function Header(){
    const navigate = useNavigate();
    return (
        <header className="c-header">
            
            <button className="c-header__button" onClick={() => navigate("/")}><span>FROM EARTH</span></button>
            <div className="c-header__items">
                <button className="c-header__button" onClick={() => navigate("/login")}><span>ACESSE AQUI</span></button>
                <button className="c-header__button"  onClick={() => navigate("/sobre")}><span>SOBRE</span></button>
            </div>
        </header>
    )
}