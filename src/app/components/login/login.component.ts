import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import decode from 'jwt-decode';


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
  data: any[] | undefined;
  isUser: boolean = true;

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  registerNav() {
    this.router.navigate(['register']);
  }

  onUserLoginSubmit() {
    const mail = this.userLoginMail
    const password = this.userLoginPassword
    if (localStorage.getItem("token") !== null) {
      this.toastr.info("Çoktan giriş yaptın", "", { timeOut: 1000 })
      const token: any = localStorage.getItem("token")
      const tokenPayload: any = decode(token);
      const arr = Object.values(tokenPayload)
      const role = arr[1]
      if (role === 'User') {
        this.router.navigate(['user']);
      } else if (role === 'Institution') {
        this.router.navigate(['kurum']);
      } else {
        this.toastr.info("HATA", "Yanlış Şeyler Deniyorsun")
        localStorage.removeItem("token")
        this.router.navigate(['login']);
      }
    } else {
      this.authService.userLogin(mail, password).subscribe((res: any) => {
        localStorage.setItem("token", res)
        this.router.navigate(['user']);
      }, (error) => {
        console.log(error)
        console.log(error.error)
        if (error.error.length > 30) {
          this.toastr.error(`${JSON.parse(error.error).title}`, `Hata`, { timeOut: 3000 })
        } else {
          this.toastr.error(`${error.error}`, "Hata", { timeOut: 3000 })
        }
      }
      )
    }
  }

  onKurumLoginSubmit() {
    const mail = this.kurumLoginMail
    const password = this.kurumLoginPassword
    if (localStorage.getItem("token") !== null) {
      this.toastr.info("Çoktan giriş yaptın", "", { timeOut: 1000 })
      const token: any = localStorage.getItem("token")
      const tokenPayload: any = decode(token);
      const arr = Object.values(tokenPayload)
      const role = arr[1]
      if (role === 'User') {
        this.router.navigate(['user']);
      } else if (role === 'Institution') {
        this.router.navigate(['kurum']);
      } else {
        this.toastr.info("HATA", "Yanlış Şeyler Deniyorsun")
        localStorage.removeItem("token")
        this.router.navigate(['login']);
      }
    } else {
      this.authService.kurumLogin(mail, password).subscribe((res: any) => {
        localStorage.setItem("token", res)
        this.router.navigate(['kurum']);
      }, (error) => {
        console.log(error)
        if (error.error.length > 30) {
          this.toastr.error(`${JSON.parse(error.error).title}`, `Hata`, { timeOut: 3000 })
        } else {
          this.toastr.error(`${error.error}`, "Hata", { timeOut: 3000 })
        } 
      })
    }

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
