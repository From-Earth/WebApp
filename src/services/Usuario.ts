import axios from "axios";
import { UsuarioLogin } from "../model/UsuarioLogin";
import { UsuarioCadastro } from "../model/UsuarioCadastro";
import { Usuario } from "../model/Usuario";

export const api = axios.create({

  baseURL: "https://webapisenac.azurewebsites.net/usuario",

});

export function postLogin(data: UsuarioLogin) {
  return api.post("/logar",data).then((resp):UsuarioLogin => resp.data);
}

export function getUser(id: string) {
  return api.get(`/${id}`).then((resp):Usuario=> resp.data);
}

export function postCadastro(data: UsuarioCadastro) {
  return api.post("/cadastrar",data).then((resp) => resp.data);
}

export function putUser(data: Usuario) {
  return api.put("/atualizar",data).then((resp) => resp.data);
}

export function deleteUser(id: string) {
  return api.delete(`/${id}`).then((resp) => resp.data);
}