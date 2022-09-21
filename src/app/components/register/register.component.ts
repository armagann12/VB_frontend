import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  isUser: boolean = true;
  rateControl: any


  constructor(private router: Router, private authService: AuthService, private toastr: ToastrService) { }


  ngOnInit(): void {
  }

  loginNav() {
    this.router.navigate(['login']);
  }


  onUserSubmit() {
    this.authService.userRegister(this.userRegisterMail,
      this.userRegisterPassword,
      this.firstName,
      this.lastName,
      this.tc
    ).subscribe((res) => {
      this.toastr.success("Başarıyla Kaydınız Alınmıştır", "", { timeOut: 3000 })
      this.router.navigate(['login']);
    }, ((err) => {
      console.log(err)
      if (err.error.length > 30) {
        this.toastr.error(`${JSON.parse(err.error).title}`, `Hata`, { timeOut: 3000 })
      } else {
        this.toastr.error(`${err.error}`, "Hata", { timeOut: 3000 })
      }
    }))
  }

  onKurumSubmit() {
    this.authService.kurumRegister(this.kurumRegisterMail,
      this.kurumRegisterPassword,
      this.name,
      this.detail
    ).subscribe((res) => {
      this.toastr.success("Başarıyla Kaydınız Alınmıştır", "", { timeOut: 3000 })
      this.router.navigate(['login']);
    }, ((err) => {
      console.log(err)
      if (err.error.length > 30) {
        this.toastr.error(`${JSON.parse(err.error).title}`, `Hata`, { timeOut: 3000 })
      } else {
        this.toastr.error(`${err.error}`, "Hata", { timeOut: 3000 })
      }
    }))
  }

  isUserFunc() {
    if (this.isUser === false) {
      this.isUser = true
    }
  }
  isKurumFunc() {
    if (this.isUser === true) {
      this.isUser = false
    }
  }
  getUrl() {
    return "url('https://i.pinimg.com/originals/03/0c/f7/030cf72efedb776cc684049a358e0b47.png')";
  }
}
