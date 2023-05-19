import { useEffect, useState } from "react";
import { getDocumentos } from "../../services/Documentos";
import Card from "../../components/Card/Card";
import "./Painel.css"
import { Documento } from "../../model/Documento";

export default function Painel(){
    const [documentos, setDocumentos] = useState<Documento[]>([]);
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
              {documentos.map((item:Documento) => {
                  return(
                      <Card id={item.id} author={item.usuario.nome} name={item.nome} progress={item.progresso}/>
                  );
                
              })}
            </>
          )}
        </div>
      </div>
    );
}