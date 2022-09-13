import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  data: any;
  firstName: any;
  lastName: any;
  mail: any;
  tc: any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((res: any) => {
      console.log(res, "user")
      this.data = res
      this.firstName = res.firstName
      this.lastName = res.lastName
      this.mail = res.mail
      this.tc = res.tc
    })
  }
  logout() {
    localStorage.removeItem("token")
    this.router.navigate(['login']);
  }

  onInfoChange() {
    const firstName = this.firstName
    const lastName = this.lastName
    const mail = this.mail
    const tc = this.tc
    this.userService.updateUser(firstName, lastName, mail, tc).subscribe((res) => {
      console.log(res)
      console.log("Sucsess")
    })
    //ADD toastr
  }

}
