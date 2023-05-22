import React, { useEffect } from "react"
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../services/UserStore";
export default function Header(){
    const navigate = useNavigate();
    const useStore = useUserStore();
    const user = useUserStore(state => state);
    console.log(useStore)

    useEffect(() =>{
        
    },[useStore])
    
    return (
        <header className="c-header">
            
            <button className="c-header__button" onClick={() => navigate("/")}><span>FROM EARTH</span></button>
            <div className="c-header__items">                
                {user.isEmpty ?  (
                    <>
                    <button className="c-header__button" onClick={() => navigate("/login")}><span>ACESSE AQUI</span></button>
                    <button className="c-header__button"  onClick={() => navigate("/sobre")}><span>SOBRE</span></button>
                    </>

                ): (
                    <>
                    <button className="c-header__button"  onClick={() => navigate("/painel")}><span>PAINEL</span></button>
                    <button className="c-header__button"  onClick={() => navigate("/painel/usuario")}><span>PERFIL</span></button>
                    
                    </>
                )}
                
            </div>
        </header>
    )
}