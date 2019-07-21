import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { RouterModule } from '@angular/router';
import { UsuariosFavoritosComponent } from './usuarios-favoritos/usuarios-favoritos.component';


@NgModule({
  declarations: [
    HeaderComponent,
    DetalleUsuarioComponent,
    UsuariosFavoritosComponent
  ],
  exports: [
    HeaderComponent,
    DetalleUsuarioComponent,
    UsuariosFavoritosComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
