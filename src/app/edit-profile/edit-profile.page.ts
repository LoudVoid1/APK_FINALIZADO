import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage  {
  
  profileForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // Agrega otros campos según sea necesario
    });
  }

  saveProfile() {
    if (this.profileForm.valid) {
      // Manejar la lógica de guardar el perfil
      console.log(this.profileForm.value);
    }
  }
}
