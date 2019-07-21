import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../../interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.scss'],
})
export class DetalleUsuarioComponent implements OnInit {

  @Input() detalleUser: Result = {};

  estrella = 'star-outline';
  constructor(private activatedRoute: ActivatedRoute,
              private usuariosService: UsuariosService,
              private dataLocalService: DataLocalService ) { }

  ngOnInit() {

   this.dataLocalService.existeUsuario( this.detalleUser )
    .then( existe => this.estrella = (existe) ? 'star' : 'star-outline');

    const id  = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);


    this.usuariosService.getUsuario( id )
        .subscribe((resp: any ) => {
            console.log(resp);
            this.detalleUser = resp.results[0];

        });
  }


  favorito(){
   const existe =  this.dataLocalService.guardarUsuario(  this.detalleUser );
   this.estrella = (existe) ? 'star' : 'star-outline';
  }
}
