// src/app/login2/login2.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Login2PageRoutingModule } from './login2-routing.module';
import { Login2Page } from './login2.page'; // Importación correcta

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Login2PageRoutingModule
  ],
  declarations: [Login2Page], // Nombre correcto de la clase
})
export class Login2PageModule {}
