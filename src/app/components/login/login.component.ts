import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  registerNav() {
    this.router.navigate(['register']);
  }

  onUserLoginSubmit() {
    const mail = this.userLoginMail
    const password = this.userLoginPassword
    if (localStorage.getItem("token") !== null) {
      alert("You are logged in")
    } else {
      this.authService.userLogin(mail, password).subscribe((res: any) => {
        console.log(res, "User başarıyla girdi.")
        localStorage.setItem("token", res)
        this.router.navigate(['user']);
      })
    }
  }

  onKurumLoginSubmit() {
    const mail = this.kurumLoginMail
    const password = this.kurumLoginPassword

    if (localStorage.getItem("token") !== null) {
      alert("You are logged in")
    } else {
      this.authService.kurumLogin(mail, password).subscribe((res: any) => {
        console.log(res, "Kurum başarıyla girdi.")
        localStorage.setItem("token", res)
        this.router.navigate(['kurum']);
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
    return "url('https://t3.ftcdn.net/jpg/02/94/27/70/360_F_294277006_pFDh10OfLuej79sFedbidqrmtYImSeu8.jpg')";
  }

}
