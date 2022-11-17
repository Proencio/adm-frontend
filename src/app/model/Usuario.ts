export interface IUsuario {
  id: string;
  nome: string;
  email: string;
  senha: string;
  img: string;
  ativo: boolean;
  telefone: string;
  perfil: string;
  data: Date;
  numero: string;
  complemento: string;
  observacao: string;
  cep: string;
}

export class IUsuarioDTO {
  id: string;
  nome: string;
  email: string;
  senha: string;
  img: string;
  ativo: boolean;
  telefone: string;
  perfil: string;
  data: Date;
  numero: string;
  complemento: string;
  observacao: string;
  cep: string;

  constructor(formValue: IUsuario) {
    this.id = formValue.id;
    this.nome = formValue.nome;
    this.email = formValue.email;
    this.senha = formValue.senha;
    this.img = formValue.img;
    this.ativo = formValue.ativo;
    this.data = formValue.data;
    this.telefone = formValue.telefone;
    this.perfil = formValue.perfil;
    this.numero = formValue.numero;
    this.complemento = formValue.complemento;
    this.observacao = formValue.observacao;
    this.cep = formValue.cep;
  }
}