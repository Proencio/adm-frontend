import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from 'src/app/model/Usuario';
import { environment } from 'src/environments/environment';
import { GenericServiceService } from '../generic-service/generic-service.service';
import { Observable } from 'rxjs';
import { take, catchError } from 'rxjs/operators';

const CONFIG = {
  api: environment.URL_POST + '/api/adm/usuario'
};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends GenericServiceService<IUsuario> {

  constructor(http: HttpClient) { 
    super(http, CONFIG.api);
  }

  saveUsuario(O: IUsuario, userId: string): Observable<IUsuario[]> {
    O.senha = btoa(O.senha);
    return this.http.post<IUsuario[]>(CONFIG.api + '/create', O).pipe(
      // tap(data => console.log(data)),
      take(1),
      catchError(this.handleError)
    );
  }

  editUsuario(O: IUsuario, id: string): Observable<IUsuario[]> {
    return this.http
      .put<IUsuario[]>(CONFIG.api + '/edit/' + id, O)
      .pipe(take(1), catchError(this.handleError));
  }

  getAdmList(): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(CONFIG.api + '/list').pipe(
      // tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }

  getUsuarioList(): Observable<any> {
    return this.http.get<any>(CONFIG.api + '/list').pipe(
      // tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }
}
