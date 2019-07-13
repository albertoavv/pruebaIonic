import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListadoUsuarios } from "../interfaces/ListadoUsuarios";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = 'https://randomuser.me/api/?results=10';

  constructor( private http: HttpClient ) { 

  }

  getListaUsers(){
    return this.http.get<ListadoUsuarios>(`${this.url}`);
  }

  getUsuario(id: string) {
    return this.http.get<ListadoUsuarios>(`${this.url}/${id}`);
    // return this.getListaUsers[idx];
  }

}
