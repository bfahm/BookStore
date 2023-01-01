import { Component, OnInit } from '@angular/core';
import { LoginForm } from '../../models/login-form';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private readonly authService: AuthService) { }

  form: LoginForm = {
    email:  '',
    password: ''
  };

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.login(this.form);
  }

  isLoading(): boolean{
    return this.authService.isLoading;
  }

}
