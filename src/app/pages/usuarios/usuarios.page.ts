import { Component, OnInit, Input } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';
import { Result } from '../../interfaces/interfaces';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  usuario: Result[] = [];


  constructor(private usuariosService: UsuariosService, private router: Router) { }

  ngOnInit() {

    this.usuariosService.getListaUsers()
                        .subscribe(resp => {
                         console.log(resp);
                         this.usuario.push(...resp.results);
    });
  }

  verDetalle(id: number){
    this.router.navigate( ['/usuario', id] );
  }

}
