import { ILogradouro } from "./Logradouro";

export interface IEmpresa {
    id: string;
    fantasia: string;
    social: string;
    email: string;
    logo: string;
    telefone: number;
    whatsapp: number;
    cnpj: number;
    data: Date;
    cpf: number;
    complemento: string;
    observacao: string;
    logradouro: ILogradouro;
    numero: number;
  }
  
  export class IEmpresaDTO {
    id: string;
    fantasia: string;
    social: string;
    email: string;
    logo: string;
    telefone: number;
    whatsapp: number;
    cnpj: number;
    data: Date;
    cpf: number;
    complemento: string;
    observacao: string;
    logradouro: ILogradouro;
    numero: number;
  
    constructor(formValue: IEmpresa) {
      this.id = formValue.id;
      this.email = formValue.email;
      this.data = formValue.data;
      this.telefone = formValue.telefone;
      this.complemento = formValue.complemento;
      this.observacao = formValue.observacao;
      this.fantasia = formValue.fantasia;
      this.social = formValue.social;
      this.logo = formValue.logo;
      this.whatsapp = formValue.whatsapp;
      this.cnpj = formValue.cnpj;
      this.cpf = formValue.cpf;
      this.logradouro = formValue.logradouro;
      this.numero = formValue.numero;
    }
  }