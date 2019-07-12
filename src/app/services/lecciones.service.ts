import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { ArticleLecciones } from '../interfaces/interfaces';



@Injectable({
  providedIn: 'root'
})
export class LeccionesService {

 // lecciones: ArticleLecciones;



  constructor( private http: HttpClient ) { }


  /*getLeccionesDeVida(){
    return this.http.get<ArticleLecciones>(`http://localhost/wp/wp_api_vida/wp-json/wp/v2/posts/5`);
  }*/
}
