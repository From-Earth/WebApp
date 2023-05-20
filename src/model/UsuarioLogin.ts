export class UsuarioLogin{
    id: number;
    nome: string;
   email: string;
   senha: string;
   token: string;

   constructor(email: string, senha: string) {
    this.email = email;
    this.senha = senha;
  }  
  
}