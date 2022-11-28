export interface ICategoria {
  id: string;
  nome: string;
  descricao: string;
  ativo: boolean;
  subcategoriaList: ICategoria[]; 
  categoriaPai: ICategoria;
}

export class ICategoriaDTO {
  id: string;
  nome: string;
  descricao: string;
  ativo: boolean;
  subcategoriaList: ICategoria[];  
  categoriaPai: ICategoria;

  constructor(formValue: ICategoria) {
    this.id = formValue.id;
    this.nome = formValue.nome;
    this.descricao = formValue.descricao;
    this.ativo = formValue.ativo;
    this.subcategoriaList = [];
    this.categoriaPai = formValue.categoriaPai;
  }
}