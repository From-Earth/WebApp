import axios from "axios";
import { FilseSaver, saveAs } from "file-saver";
import { Documento } from "../model/Documento";
import { DocumentoList } from "../model/DocumentoList";
import { DocumentoAtualiza } from "../model/DocumentoAtualiza";

 const api = axios.create({
  baseURL: "https://webapisenac.azurewebsites.net/documentos",
});

export function getDocumentos() {
  return api.get("/").then((resp):DocumentoList => resp.data);
}

export function getDocumento(id: number, nome: string): Promise<void> {
  return api
    .get(`/download/${id}`, { responseType: "blob" })
    .then((response) => {
      saveAs(response.data, nome);
    });
}
export function getDocumentoId(id: string) {
  return api.get(`/${id}`).then((resp):Documento => resp.data);
}

export function postDocumento(id: string, arquivo: File ){
  const formData = new FormData();
  formData.append("id", id);
  formData.append("arquivo", arquivo);
  return api.post("/upload", formData, {
    headers:{
      'Content-Type': 'multipart/form-data'
    }
  }).then(resp =>  resp.data).catch((error) => alert(error))

}

export function putDocumento(doc: DocumentoAtualiza){
  alert(doc.publico)
  return api
  .put("/atualizar", doc)
  .then((response):Documento => response.data).catch((error) => error);
}
export function deleteDocumento(id: string) {
  return api.delete(`/${id}`).then((resp) => resp.data);
}