import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.page.html',
  styleUrls: ['./delete-account.page.scss'],
})
export class DeleteAccountPage {

  constructor(private navCtrl: NavController) {}

  confirmDelete() {
    // Aquí iría la lógica para eliminar la cuenta del usuario
    console.log('Cuenta eliminada');
    // Redirigir después de la eliminación
    this.navCtrl.navigateRoot('/home'); // Cambia '/home' por la página que corresponda
  }

  cancelDelete() {
    this.navCtrl.back(); // Regresar a la página anterior
  }
}
