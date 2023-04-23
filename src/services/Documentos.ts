import axios from "axios";

export const api = axios.create({
  baseURL: "https://webapisenac.azurewebsites.net",
});

export function getDocumentos() {
    return api.get("/documentos").then((resp) => resp.data);
  }