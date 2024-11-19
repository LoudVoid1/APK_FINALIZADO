import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar ReactiveFormsModule
import { EditProfilePage } from './edit-profile.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // Agrega esta línea
    IonicModule
  ],
  declarations: [EditProfilePage]
})
export class EditProfilePageModule {}
