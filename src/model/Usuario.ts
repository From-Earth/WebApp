import { Documento } from "./Documento";

export class Usuario{
    id : number;
   nome: string;
   cpf: string;
   email: string;
   senha: string;
   telefone: string;
   logradouro: string;
   numeroLogradouro: string;
   complemento	: string = "";
   documento: Documento[];

   constructor(
    id: number,
    nome: string,
    cpf: string,
    email: string,
    senha: string,
    telefone: string,
    logradouro: string,
    numeroLogradouro: string,
    complemento: string,
  ) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.senha = senha;
    this.telefone = telefone;
    this.logradouro = logradouro;
    this.numeroLogradouro = numeroLogradouro;
    this.complemento = complemento;
    this.documento = []
  }
   
}