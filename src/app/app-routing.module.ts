import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaAddComponent } from './components/categoria/categoria-add/categoria-add.component';
import { CategoriaListComponent } from './components/categoria/categoria-list/categoria-list.component';
import { CategoriaUpdateComponent } from './components/categoria/categoria-update/categoria-update.component';
import { FormEmpresaComponent } from './components/empresa/form-empresa/form-empresa.component';
import { PerfilEmpresaComponent } from './components/empresa/perfil-empresa/perfil-empresa.component';
import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/usuarios/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path: 'empresa',
    component: PerfilEmpresaComponent
  },
  {
    path: 'empresa-edit',
    component: FormEmpresaComponent
  },
  {
    path: 'categorias',
    component: CategoriaListComponent
  },
  {
    path: 'add-categoria',
    component: CategoriaAddComponent
  },
  {
    path: 'edite-categoria',
    component: CategoriaUpdateComponent
  },
  // {
  //   path: 'pedido',
  //   component: PedidoComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
