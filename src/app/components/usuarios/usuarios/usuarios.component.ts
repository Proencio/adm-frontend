import { Component, OnInit } from '@angular/core';
import { IUsuario } from 'src/app/model/Usuario';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  listUsuarioAdm: IUsuario[] = [];
  displayedColumns: string[] = ['nome', 'email', 'telefone', 'perfil', 'acoes'];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.listaAdm();
  }

  listaAdm() {
    this.usuarioService.getUsuarioList().subscribe(
      (res) => {
        this.listUsuarioAdm = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
