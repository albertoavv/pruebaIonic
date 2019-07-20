import { Component, OnInit } from '@angular/core';
import { Result } from '../../interfaces/interfaces';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {


  detalleUser: Result = {};

  constructor( ) {}

  ngOnInit() {



  }

}
