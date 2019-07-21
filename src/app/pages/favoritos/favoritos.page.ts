import { Component, OnInit } from '@angular/core';
import { Result } from '../../interfaces/interfaces';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  usuario: Result[] = [];

  constructor(private dataLocalService: DataLocalService) { }

  async ngOnInit() {
    this.usuario = await this.dataLocalService.cargarFavoritos();
  }

}
