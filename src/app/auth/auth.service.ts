import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { LoginForm } from '../models/login-form';
import { RegisterForm } from '../models/register-form';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoading = false;

  constructor() { }

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
        console.log(user);
        alert('Success');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
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
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert('Wrong Email or Password');
      }).finally(()=> {
        this.isLoading = false;
      });
  }
}
