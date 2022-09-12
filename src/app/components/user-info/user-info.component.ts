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

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((res) => {
      console.log(res)
      this.data = res
    })
  }
  logout() {
    console.log("You are Logging Out")
    localStorage.removeItem("token")
    this.router.navigate(['login']);
  }

}
