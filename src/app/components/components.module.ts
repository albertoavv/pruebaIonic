import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';

@NgModule({
  declarations: [
    HeaderComponent,
    DetalleUsuarioComponent
  ],
  exports:[
    HeaderComponent,
    DetalleUsuarioComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
