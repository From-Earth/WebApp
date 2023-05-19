import { Documento } from "./Documento";

export class UsuarioAtualiza {
  nome: string;
  cpf: string;
  email: string;
  senha: string;
  telefone: string;
  logradouro: string;
  numeroLogradouro: string;
  complemento: string;
  documento: Documento;

  constructor(
    nome: string,
    cpf: string,
    email: string,
    senha: string,
    telefone: string,
    logradouro: string,
    numeroLogradouro: string,
    complemento: string
  ) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.senha = senha;
    this.telefone = telefone;
    this.logradouro = logradouro;
    this.numeroLogradouro = numeroLogradouro;
    this.complemento = complemento;
    
  }
}
