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
      this.toastr.error("Hata", "", { timeOut: 3000 })
      console.log(err)
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
      this.toastr.error("Hata", "", { timeOut: 3000 })
      console.log(err)
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
    return "url('https://t3.ftcdn.net/jpg/02/94/27/70/360_F_294277006_pFDh10OfLuej79sFedbidqrmtYImSeu8.jpg')";
  }
}
