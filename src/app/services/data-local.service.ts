import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Result } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  usuarios: Result[] = [];

  constructor(private storage: Storage, public toastController: ToastController) { }


  async presentToast( message: string) {
    const toast = await this.toastController.create({
      message ,
      duration: 1500
    });
    toast.present();
  }

  guardarUsuario(usuario: Result){
    
    let existe = false;
    let mensaje = '';

    for ( const us of this.usuarios){
      if (us.id === usuario.id ) {
        existe = true;
        break;
      }
    }

    if (existe) {
      this.usuarios = this.usuarios.filter(us => us.id !== usuario.id);
      mensaje = 'Removido de favoritos';
    } else {
      this.usuarios.push( usuario );
      mensaje = 'agregado a favoritos';
    }
    
    this.presentToast( mensaje );
    this.storage.set('usuarios', this.usuarios);
  }
}
