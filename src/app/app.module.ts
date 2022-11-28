import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NavComponent } from './components/nav/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AddUsuarioComponent } from './components/usuarios/add-usuario/add-usuario.component';
import { AltUsuarioComponent } from './components/usuarios/alt-usuario/alt-usuario.component';
import { UsuariosComponent } from './components/usuarios/usuarios/usuarios.component';
import { PerfilEmpresaComponent } from './components/empresa/perfil-empresa/perfil-empresa.component';
import { FormEmpresaComponent } from './components/empresa/form-empresa/form-empresa.component';
import { AlertModalComponent } from './shared/alert-modal/alert-modal/alert-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CategoriaListComponent } from './components/categoria/categoria-list/categoria-list.component';
import { CategoriaFormComponent } from './components/categoria/categoria-form/categoria-form.component';
import { CategoriaAddComponent } from './components/categoria/categoria-add/categoria-add.component';
import { CategoriaUpdateComponent } from './components/categoria/categoria-update/categoria-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    NavComponent,
    AddUsuarioComponent,
    AltUsuarioComponent,
    UsuariosComponent,
    PerfilEmpresaComponent,
    FormEmpresaComponent,
    AlertModalComponent,
    CategoriaListComponent,
    CategoriaFormComponent,
    CategoriaAddComponent,
    CategoriaUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatTabsModule,
    MatSidenavModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
