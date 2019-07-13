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

  detalleUser: Result;

  constructor( private activatedRoute: ActivatedRoute, private _usuariosService: UsuariosService) {
    this.activatedRoute.params.subscribe( resp => {
      console.log(resp['id']);
      this._usuariosService.getUsuario(resp['id']).subscribe( usuario => {
        console.log(usuario);
        this.detalleUser = usuario.results[0];
      });

    })
   }

  ngOnInit() {
  }

}
