import { Component, OnInit } from '@angular/core';
import { LeccionesService } from '../../services/lecciones.service';
//import { Content, ArticleLecciones } from '../../interfaces/interfaces';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  //leccion: Content[] = [];
  //datos: ArticleLecciones;

  constructor(/*private lecciones: LeccionesService*/ ) {}

  ngOnInit(){
    
     /* this.lecciones.getLeccionesDeVida()
      .subscribe(resp => {
        console.log(resp);
        this.leccion.push(resp.content);



      });*/
     
  }


}
