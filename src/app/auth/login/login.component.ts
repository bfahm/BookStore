import { Component, OnInit } from '@angular/core';
import { LoginForm } from '../../models/login-form';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  isLoading = false;
  form: LoginForm = {
    email:  '',
    password: ''
  };

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.isLoading){
      return;
    }

    this.isLoading = true;
    
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.form.email, this.form.password)
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
