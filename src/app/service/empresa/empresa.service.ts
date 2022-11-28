import { Injectable } from '@angular/core';
import { IUsuario } from 'src/app/model/Usuario';
import { environment } from 'src/environments/environment';
import { GenericServiceService } from '../generic-service/generic-service.service';
import { Observable } from 'rxjs';
import { take, catchError } from 'rxjs/operators';
import { IEmpresa } from 'src/app/model/Empresa';
import { HttpClient } from '@angular/common/http';

const CONFIG = {
  api: environment.URL_POST + '/api/adm/empresa'
};

@Injectable({
  providedIn: 'root'
})
export class EmpresaService extends GenericServiceService<IEmpresa> {

  constructor(http: HttpClient) { 
    super(http, CONFIG.api);
  }

  // buscaEmpresa(): Observable<any> {
  //   return this.http.get<any>(CONFIG.api + '/dados').pipe(
  //     // tap((data) => console.log(data)),
  //     catchError(this.handleError)
  //   );
  // }

  buscaEmpresa(): Observable<IEmpresa> {
    
    return this.http.get<IEmpresa>(CONFIG.api + '/dados').pipe(
      // tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }

  update(empresa: IEmpresa) {
    return this.http.post(CONFIG.api + '/create', empresa).pipe(
      // tap(data => console.log(data)),
      // take(1),
      catchError(this.handleError)
    );
  }
}
