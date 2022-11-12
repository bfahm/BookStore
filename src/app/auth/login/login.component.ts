import { Component, OnInit } from '@angular/core';
import { LoginForm } from '../../models/login-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  form: LoginForm = {
    email:  '',
    password: ''
  };

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form);
  }

}
