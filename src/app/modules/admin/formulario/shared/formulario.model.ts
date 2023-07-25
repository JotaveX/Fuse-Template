import { Funcionario } from "../../funcionario/shared/funcionario.model";

export class Formulario {
    id?: any;
    codigo?: number;
    data?: any;
    cpf?: string;
    estadoCivil?: string;
    rg?: string;
    email?: string;
    cep?: number;
    administrador?: Funcionario;
    funcionarios?: Funcionario[];
    pontos?: number;
    doc?: string;
}