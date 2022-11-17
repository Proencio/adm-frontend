import { Component, OnInit } from '@angular/core';
import { IEmpresa } from 'src/app/model/Empresa';
import { EmpresaService } from 'src/app/service/empresa/empresa.service';

@Component({
  selector: 'app-perfil-empresa',
  templateUrl: './perfil-empresa.component.html',
  styleUrls: ['./perfil-empresa.component.css']
})
export class PerfilEmpresaComponent implements OnInit {
  empresa: IEmpresa | undefined;
  constructor(private empresaService: EmpresaService) { }

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

}
