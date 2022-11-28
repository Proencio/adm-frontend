import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategoria, ICategoriaDTO } from 'src/app/model/Categoria';
import { IEmpresaDTO } from 'src/app/model/Empresa';
import { CategoriaService } from 'src/app/service/categoria/categoria.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {
  @Input() categoria: any;
  form!: FormGroup;
  editar = false;
  listCategorias: any;
  categoriaPai: ICategoria | undefined;
  
  constructor(
    private formBuilder: FormBuilder,
    private alertServices: AlertModalService,
    private router: Router,
    private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.initForm();

    if (this.categoria != null && this.categoria != undefined) {
      this.editar = true;
      this.patchForm();
    }
  }

  initForm()
  {
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required]],
      descricao: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(500)]],
      ativo: [null],
      subcategoriaList: [null],
      categoriaPai: [null]
    });
  }

  patchForm()
  {
    this.form.patchValue({
      id: this.categoria.get("id"),
      nome: this.categoria.get("nome"),
      descricao: this.categoria.get("descricao"),
      ativo: this.categoria.get("ativo"),
      subcategoriaList: this.categoria.get("subcategoriaList"),
      categoriaPai: this.categoria.get("categoriaPai"),
    });
  }

  onSubmit(): void {
    
    if (this.form.invalid) {
      return;
    }
    const dto = new ICategoriaDTO(this.form.value as ICategoriaDTO);
    this.obterCategoriaPai(this.form.value.categoriaPai);


    if (this.categoriaPai != undefined) {
      dto.categoriaPai = this.categoriaPai;
    }
    
    if (this.editar) {
      this.update(dto);
    } else {
      this.create(dto);
    }
  }

  create(categoria: ICategoriaDTO) {
    this.categoriaService.create(categoria).subscribe(
      (data: any) => {
        // this.submitted = false;
        this.handSuccess("Boa noticia, o cadastro ocorreu como esperado.");
        this.form.reset();
        this.router.navigate(['categorias']);
      },
      (err: any) => {
        // console.log(err);
        this.handDanger(err.error);
      }
    );
  }

  update(categoria: ICategoriaDTO) {
    {
      this.categoriaService.update(categoria).subscribe(
        (data: any) => {
          // this.submitted = false;
          this.handSuccess("Boa noticia, sua alteração ocorreu como esperado.");
          this.form.reset();
          this.router.navigate(['categorias']);
        },
        (err: any) => {
          // console.log(err);
          this.handDanger(err.error);
        }
      );
    }
  }

  async obterCategoriaPai(id: string) {
      this.listCategorias.forEach((cat: any) => {
        console.log(cat.id, id);
        if (cat.id == id) {
          console.log("ok");
          this.categoriaPai =  cat;
        }
      });
      return undefined;
  }

  obterListCatalogo() {
    this.categoriaService.buscaCategorias().subscribe(
      (res) => {
        this.listCategorias = res;
        console.log(res);
      },
      (err) => {
        this.handDanger(err.error);
      }
    );
  }

  cancelar() {
    this.router.navigate(['categorias']);
  }

  get f()
  {
    return this.form.controls;
  }

  handSuccess(message: string) {
    this.alertServices.showAlertSuccess(message);
  }

  handDanger(message: string) {
    this.alertServices.showAlertDanger(message);
  }

  handWarning(message: string) {
    this.alertServices.showAlertWarning(message);
  }
}
