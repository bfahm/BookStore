import { Component, OnInit } from '@angular/core';
import { RegisterForm } from '../../models/register-form';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private readonly authService: AuthService) { }

  form: RegisterForm = {
    email:  '',
    password: '',
    confirmPassword: ''
  };

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.register(this.form);
  }

  isLoading(): boolean{
    return this.authService.isLoading;
  }
}
