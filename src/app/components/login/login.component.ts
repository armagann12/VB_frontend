import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLoginMail: any;
  userLoginPassword: any;
  kurumLoginMail: any;
  kurumLoginPassword: any;

  constructor() { }

  ngOnInit(): void {
  }

  onUserLoginSubmit() {
    const obj = {
      mail:this.userLoginMail,
      password: this.userLoginPassword,
    }
    console.log(obj)
    return this.userLoginMail
  }

  onKurumLoginSubmit() {
    const obj = {
      mail:this.kurumLoginMail,
      password: this.kurumLoginPassword,
    }
    console.log(obj)
    return this.kurumLoginMail
  }

}
