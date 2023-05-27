import axios from "axios";
import { FilseSaver, saveAs } from "file-saver";
import { Documento } from "../model/Documento";
import { DocumentoList } from "../model/DocumentoList";

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
