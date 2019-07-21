import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../../interfaces/interfaces';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

 usuario: Result[] = [];

constructor(private dataLocalService: DataLocalService){ }

async ngOnInit() {

this.usuario = await this.dataLocalService.cargarFavoritos();
}

}
