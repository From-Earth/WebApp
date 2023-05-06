import axios from "axios";
import { UsuarioLogin } from "../model/UsuarioLogin";

export const api = axios.create({
  baseURL: "https://webapisenac.azurewebsites.net/usuario",
});

export function postLogin(data: UsuarioLogin) {
  return api.post("/logar",data).then((resp) => resp.data);
}

export function getUser(id: string) {
  return api.get(`/${id}`).then((resp):Usuario=> resp.data);
}

