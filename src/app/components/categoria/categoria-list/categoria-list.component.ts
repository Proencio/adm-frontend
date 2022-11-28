import { animate, state, AnimationStyleMetadata, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategoria } from 'src/app/model/Categoria';
import { IUsuario, IUsuarioDTO } from 'src/app/model/Usuario';
import { CategoriaService } from 'src/app/service/categoria/categoria.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css'],

  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CategoriaListComponent implements OnInit {
  listCategorias: ICategoria[] = [];
  displayedColumns: string[] = ['nome', 'descricao', 'acoes'];
  categoria: ICategoria | undefined;

  // columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplay = ['nome', 'descricao', 'acoes'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: ICategoria[] = [];

  


  
  constructor(private router: Router,
    private categoriaService: CategoriaService,
    private alertServices: AlertModalService,) { }

  ngOnInit(): void {
    
    this.listaCategorias();
  }

  getList(list: any) {
    let lst: any;
    let count = 0;

      console.log("33333333333333333333333")
      console.log(list.subcategoriaList);
      return list.subcategoriaList;

  }

  add() {
    this.router.navigate(['add-categoria']);
  }

  listaCategorias() {
    this.categoriaService.buscaCategorias().subscribe(
      (res) => {
        this.listCategorias = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  delete(categoriaId: string) {
    this.categoriaService.inativar(categoriaId).subscribe(
      (res) => {
        this.listaCategorias();
        this.handSuccess("Categoria excluída como esperado");
      },
      (err) => {
        console.log(err);
        this.handDanger(err.error);
      }
    );
  }

  update(categoria: ICategoria) {
    this.categoria = categoria;
    this.router.navigate(['edite-categoria', this.categoria]);
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
