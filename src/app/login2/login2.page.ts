// src/app/login2/login2.page.ts
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private alertCtrl: AlertController) {}

  // Función para iniciar sesión
  async login() {
    try {
      const user = await this.authService.login(this.email, this.password);
      this.showAlert('Éxito', 'Inicio de sesión exitoso.');
      console.log('Usuario:', user);
    } catch (error) {
      this.showAlert('Error', 'Credenciales incorrectas.');
      console.error('Error en login:', error);
    }
  }

  // Función para registrar usuario
  async register() {
    try {
      const user = await this.authService.register(this.email, this.password);
      this.showAlert('Éxito', 'Usuario registrado exitosamente.');
      console.log('Usuario registrado:', user);
    } catch (error) {
      this.showAlert('Error', 'No se pudo registrar el usuario.');
      console.error('Error en registro:', error);
    }
  }

  onSubmit() {
    // Lógica para manejar el envío del formulario
    console.log('Formulario enviado');
  }
  
  // Función para mostrar alertas
  async showAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
