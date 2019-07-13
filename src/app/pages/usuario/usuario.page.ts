import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { Result } from '../../interfaces/interfaces';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  //usuario: UsuarioModel = new UsuarioModel();

  detalleUser: Result;

  constructor( private activatedRoute: ActivatedRoute, private _usuariosService: UsuariosService) {
   /* this.activatedRoute.params.subscribe( resp => {
      console.log(resp['id']);
      this._usuariosService.getUsuario(resp['id']).subscribe( usuario => {
        console.log(usuario);
        this.detalleUser = usuario.results[0];
      });

    });*/
   }

  ngOnInit() {

    const id  = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);

    this._usuariosService.getUsuario( id )
        .subscribe((resp: any ) => {
            //console.log(resp.results[0].email);
            console.log(resp);
            //this.detalleUser.id = resp.id;
            this.detalleUser = resp.results[0];
            
           // console.log(this.detalleUser.picture.thumbnail);
            
        });
    

  }

}
