// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = getAuth();

  constructor() {}

  // Registro de usuario
  register(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  // Inicio de sesión
  login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // Cerrar sesión
  logout(): Promise<void> {
    return this.auth.signOut();
  }
}
