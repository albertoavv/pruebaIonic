import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListadoUsuarios } from "../interfaces/ListadoUsuarios";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = 'https://randomuser.me/api';
  pageList = 0;

  constructor( private http: HttpClient ) {

  }
  //https://randomuser.me/api/?page=2&results=10&seed=abc


  getListaUsers(){
    this.pageList++;
    return this.http.get<ListadoUsuarios>(`${this.url}/?page=${ this.pageList }&results=50`);
  }

  getUsuario(id: string) {
    return this.http.get<ListadoUsuarios>(`${this.url}/?results=10/${id}`);
  }

}
