import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  detalleUser: any = {};

  constructor( private activatedRoute: ActivatedRoute, private _usuariosService: UsuariosService) {
    this.activatedRoute.params.subscribe( resp => {
      console.log(resp['id']);
      this.detalleUser = this._usuariosService.getUsuario(resp['id']);
      console.log(this.detalleUser);
      
      
    })
   }

  ngOnInit() {
  }

}
