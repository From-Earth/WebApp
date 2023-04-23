import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./Home.css";
import { getDocumentos } from "../../services/Documentos";

export default function Home() {
  const [documentos, setDocumentos] = useState([]);
  const [load, setLoad] = useState(true)
  useEffect(() => {
    if (documentos.length == 0) {
      getDocumentos()
        .then(setDocumentos)
        .catch((err) => console.log(err)).finally(()=> setLoad(false));
    }
    console.log(documentos)
  }, []);
  return (
    <div className="c-home">
      <div className="c-home__list">
        {load &&(
            <p>Carregando...</p>
        )}
        {documentos.length > 0 && (
          <>
            {documentos.map((item) => {
                return(
                    <Card author={item.usuario.nome} name={item.nome} progress={item.progresso}/>
                );
              
            })}
          </>
        )}
      </div>
    </div>
  );
}
