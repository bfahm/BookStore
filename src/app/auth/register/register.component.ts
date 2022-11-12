import { Component, OnInit } from '@angular/core';
import { RegisterForm } from '../../models/register-form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  form: RegisterForm = {
    email:  '',
    password: '',
    confirmPassword: ''
  };

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form);
  }

}
