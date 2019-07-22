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

  @Input()  usuariofav: Result[] = [];

  constructor(private usuariosService: UsuariosService, private router: Router) { }

  ngOnInit() {

  }





}
