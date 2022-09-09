import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-kurum',
  templateUrl: './user-kurum.component.html',
  styleUrls: ['./user-kurum.component.css']
})
export class UserKurumComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllKurum().subscribe((res) =>{
      console.log(res)
    })
  }

}
