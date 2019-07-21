import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Result } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  usuarios: Result[] = [];

  constructor(private storage: Storage, public toastController: ToastController) { 
    this.cargarFavoritos();
  }


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
      mensaje = 'Agregado a favoritos';
    }
    
    this.presentToast( mensaje );
    this.storage.set('usuarios', this.usuarios);

    return !existe;
  }
  
  async cargarFavoritos(){
    const usuarios = await this.storage.get('usuarios');
    this.usuarios = usuarios || [];
    return this.usuarios;
  }

  async existeUsuario(id ){
     await this.cargarFavoritos();
    const existe = this.usuarios.find(us => us.id === id );
    return (existe) ? true : false;
  }
}
