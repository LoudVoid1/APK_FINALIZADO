import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'login', url: '/login'},
  ];
  constructor() {}
}

