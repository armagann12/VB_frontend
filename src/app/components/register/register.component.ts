import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userRegisterMail: any;
  userRegisterPassword: any;
  firstName: any;
  lastName: any;
  tc: any;

  kurumRegisterMail: any;
  kurumRegisterPassword: any;
  name: any;
  detail: any;

  constructor() {}

  
  ngOnInit(): void {
  }

  onUserSubmit() {
    const userObj = {
      mail:this.userRegisterMail,
      password: this.userRegisterPassword,
      firstName: this.firstName,
      lastName:this.lastName,
      tc: this.tc
    }
    console.log(userObj)
    return this.userRegisterMail
  }

  onKurumSubmit() {
    const kurumObj = {
      mail:this.kurumRegisterMail,
      password: this.kurumRegisterMail,
      name: this.name,
      detail :this.detail,
    }
    console.log(kurumObj)
    return this.kurumRegisterMail
  }

}
