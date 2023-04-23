import axios from "axios";
import { FilseSaver, saveAs } from "file-saver";

export const api = axios.create({
  baseURL: "https://webapisenac.azurewebsites.net",
});

export function getDocumentos() {
  return api.get("/documentos").then((resp) => resp.data);
}

export function getDocumento(id: number, nome: string): Promise<void> {
  return api
    .get(`/documentos/download/${id}`, { responseType: "blob" })
    .then((response) => {
      saveAs(response.data, nome);
    });
}
