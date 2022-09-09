import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  loginNav(){
    this.router.navigate(['login']);
  }


  onUserSubmit() {
    this.authService.userRegister(this.userRegisterMail,
      this.userRegisterPassword,
      this.firstName,
      this.lastName,
      this.tc
    ).subscribe((res) => {
      console.log(res, "Başarıyla kaydedildi")
      this.router.navigate(['login']);
    })
  }

  onKurumSubmit() {
    console.log(this.kurumRegisterMail,
      this.kurumRegisterPassword,
      this.name,
      this.detail)
    this.authService.kurumRegister(this.kurumRegisterMail,
      this.kurumRegisterPassword,
      this.name,
      this.detail
    ).subscribe((res) => {
      console.log(res, "Başarıyla kaydedildi")
      this.router.navigate(['login']);
    })
  }

}
