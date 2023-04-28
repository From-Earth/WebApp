import axios from "axios";

export const api = axios.create({
  baseURL: "https://webapisenac.azurewebsites.net/usuario",
});

export function postLogin(data: UsuarioLogin) {
  return api.post("/logar",data).then((resp) => resp.data);
}

