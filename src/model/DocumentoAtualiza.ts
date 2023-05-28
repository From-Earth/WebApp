import { Documento } from "./Documento";
import { Usuario } from "./Usuario";

export class DocumentoAtualiza{
    id: number;
nome: string;
progresso: number;
publico: boolean;
descricao: string;

constructor(doc: Documento  ) {
    this.id = doc.id;
    this.nome = doc.nome;
    this.progresso = doc.progresso;
    this.publico = doc.publico;
    this.descricao = doc.descricao
    
  }
}