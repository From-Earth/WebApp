import React, { useEffect } from "react"
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../services/UserStore";
export default function Header(){
    const navigate = useNavigate();
    const useStore = useUserStore();

    console.log(useStore)

    useEffect(() =>{
        console.log("Atualizou")
    },[useStore])
    
    return (
        <header className="c-header">
            
            <button className="c-header__button" onClick={() => navigate("/")}><span>FROM EARTH</span></button>
            <div className="c-header__items">
                
                <button className="c-header__button" onClick={() => navigate("/login")}><span>ACESSE AQUI</span></button>
                <button className="c-header__button"  onClick={() => navigate("/sobre")}><span>SOBRE</span></button>
                <button className="c-header__button"  onClick={() => navigate("/usuario")}><span>PERFIL</span></button>
            </div>
        </header>
    )
}