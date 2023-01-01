import { Component, OnInit } from '@angular/core';
import { RegisterForm } from '../../models/register-form';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  isLoading = false;
  form: RegisterForm = {
    email:  '',
    password: '',
    confirmPassword: ''
  };

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.isLoading){
      return;
    }

    this.isLoading = true;
    
    
    if(this.form.password !== this.form.confirmPassword){
      return;
    }

    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
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
}
