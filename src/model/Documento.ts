import { Usuario } from "./Usuario";

export class Documento{
    id: number;
arquivo: any;
nome: string;
data_insercao	: Date;
progresso: number;
publico: boolean;
descricao: string;
extensao: string;
usuario: Usuario;
}