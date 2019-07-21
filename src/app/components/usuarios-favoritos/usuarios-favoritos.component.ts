import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../../interfaces/interfaces';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-favoritos',
  templateUrl: './usuarios-favoritos.component.html',
  styleUrls: ['./usuarios-favoritos.component.scss'],
})
export class UsuariosFavoritosComponent implements OnInit {

  @Input()  usuario: Result[] = [];

  constructor(private usuariosService: UsuariosService, private router: Router) { }

  ngOnInit() {
    this.getListaUsuarios();
  }

  loadData( event ) {

   // console.log(event);

    this.getListaUsuarios( event );
  }

  getListaUsuarios( event? ) {

    this.usuariosService.getListaUsers()
      .subscribe( resp => {
        // console.log('noticias', resp );

        if ( resp.results.length === 0 ) {
          event.target.disabled = true;
          event.target.complete();
          return;
        }

        // this.noticias = resp.articles;
        this.usuario.push( ...resp.results );

        if ( event ) {
          event.target.complete();
        }

      });
  }




  /*getListaUsuarios(){
    this.usuariosService.getListaUsers()
                        .subscribe(resp => {
                         console.log(resp);
                         this.usuario.push(...resp.results);
    });
  }*/

  verDetalle(idx: number){
    this.router.navigate( ['/usuario', idx] );
  }


}
