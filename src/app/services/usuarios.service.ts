import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListadoUsuarios } from "../interfaces/ListadoUsuarios";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient ) { 

  }

  getListaUsers(){
    return this.http.get<ListadoUsuarios>(`https://randomuser.me/api/?results=10`);
  }

  getUsuario(idx: number) {
    return this.http.get<ListadoUsuarios>(`https://randomuser.me/api/?results=10/${idx}`);
    // return this.getListaUsers[idx];
  }

}
