import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { LoginForm } from '../models/login-form';
import { RegisterForm } from '../models/register-form';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoading = false;
  isAuthenticated = false;

  constructor(private readonly router: Router) { }

  register(form: RegisterForm){
    if(this.isLoading){
      return;
    }

    this.isLoading = true;
    
    
    if(form.password !== form.confirmPassword){
      return;
    }

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        this.isAuthenticated = true;
        this.router.navigate(['']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        this.isAuthenticated = false;
      }).finally(()=> {
        this.isLoading = false;
      });
  }

  login(form: LoginForm){
    if(this.isLoading){
      return;
    }

    this.isLoading = true;
    
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        this.isAuthenticated = true;
        this.router.navigate(['']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        this.isAuthenticated = false;
        alert('Wrong Email or Password');
      }).finally(()=> {
        this.isLoading = false;
      });
  }

  logout(){
    const auth = getAuth();
    signOut(auth).then(() => {
      this.isAuthenticated = false;
        this.router.navigate(['login']);
    }).catch((error) => {
      console.error(error);
    });
  }
}
