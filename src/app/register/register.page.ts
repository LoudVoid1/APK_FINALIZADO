import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
})
export class RegisterPage {
  email: string = '';
  password: string = '';

  constructor(private auth: Auth, private navCtrl: NavController) {}

  async register() {
    try {
      await createUserWithEmailAndPassword(this.auth, this.email, this.password);
      this.navCtrl.navigateForward('/home');
    } catch (error) {
      console.error('Error al registrarse', error);
    }
  }
}
