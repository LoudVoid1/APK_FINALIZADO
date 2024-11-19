import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  @ViewChild(IonContent) content!: IonContent;

  constructor() {}

  iniciarSesion(formulario: NgForm){
  
  }

  registrarUsuario(formulario: NgForm){
  
  }

  ngAfterViewInit() {
    // Ahora puedes usar `content` aquí o en métodos llamados después de que la vista se haya inicializado
  }

  scrollToBottom() {
    this.content.scrollToBottom(500);
  }

  scrollToTop() {
    this.content.scrollToTop(500);
  }


  toggleTheme() {
    const body = document.body;
    if (body.classList.contains('dark')) {
      body.classList.remove('dark');
    } else {
      body.classList.add('dark');
    }
  }

  ngOnInit() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    document.body.classList.toggle('dark', prefersDark.matches);
  
    prefersDark.addEventListener('change', (mediaQuery) => {
      document.body.classList.toggle('dark', mediaQuery.matches);
    });
  }

}