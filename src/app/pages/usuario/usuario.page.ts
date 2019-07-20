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


  detalleUser: Result = {};

  constructor( private activatedRoute: ActivatedRoute, private usuariosService: UsuariosService) {}

  ngOnInit() {

    const id  = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);

    this.usuariosService.getUsuario( id )
        .subscribe((resp: any ) => {
            console.log(resp);
            this.detalleUser = resp.results[0];

        });

  }

}
