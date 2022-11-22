import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmpresa } from 'src/app/model/Empresa';
import { EmpresaService } from 'src/app/service/empresa/empresa.service';

@Component({
  selector: 'app-perfil-empresa',
  templateUrl: './perfil-empresa.component.html',
  styleUrls: ['./perfil-empresa.component.css']
})
export class PerfilEmpresaComponent implements OnInit {
  empresa: IEmpresa | undefined;
  constructor(private empresaService: EmpresaService, private router: Router) { }

  ngOnInit(): void {
    this.buscaEmpresa();
  }

  buscaEmpresa() {
    this.empresaService.buscaEmpresa().subscribe(
      (res) => {
        this.empresa = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  editar() {
    // this.router.navigate(['empresa-edit']);
    if (this.empresa != null && this.empresa.id != undefined) {
      this.router.navigate(['empresa-edit/', this.empresa.id]);
    }    
    // [routerLink]="['/chamados/novo/', empresa.id]"
  }
}
