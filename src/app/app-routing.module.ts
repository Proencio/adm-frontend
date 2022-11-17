import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  // {
  //   path: 'produtos',
  //   component: ProdutosComponent
  // },
  // {
  //   path: 'sacola',
  //   component: SacolaComponent
  // },
  // {
  //   path: 'produto/perfil',
  //   component: PerfilComponent
  // },
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
