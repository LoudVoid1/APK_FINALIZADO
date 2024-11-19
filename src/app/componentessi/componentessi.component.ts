import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-componentessi',
  templateUrl: './componentessi.component.html',
  styleUrls: ['./componentessi.component.scss'],
})
export class ComponentessiComponent  implements OnInit {

  formulario: FormGroup;

  constructor() { 

    this.formulario = new FormGroup({

      user: new FormControl(),
      password: new FormControl(),

    })

  }
  ngOnInit(): void {
  }

  onSumbit() {
    console.log(this.formulario.value)
  }

}
