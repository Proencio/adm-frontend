import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { ICategoria } from 'src/app/model/Categoria';
import { IEmpresa } from 'src/app/model/Empresa';
import { environment } from 'src/environments/environment';
import { GenericServiceService } from '../generic-service/generic-service.service';

const CONFIG = {
  api: environment.URL_POST + '/api/adm/categoria'
};

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends GenericServiceService<ICategoria> {

  constructor(http: HttpClient) { 
    super(http, CONFIG.api);
  }

  buscaCategorias(): Observable<any> {
    
    return this.http.get<any>(CONFIG.api + '/list').pipe(
      // tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }

  create(categoria: ICategoria) {
    return this.http.post(CONFIG.api + '/create', categoria).pipe(
      catchError(this.handleError)
    );
  }

  update(categoria: ICategoria) {
    return this.http.put(CONFIG.api + '/update', categoria).pipe(
      catchError(this.handleError)
    );
  }

  inativar(categoriaId: string) {
    return this.http.get(CONFIG.api + '/inative/' + categoriaId).pipe(
      catchError(this.handleError)
    );
  }
  
}
