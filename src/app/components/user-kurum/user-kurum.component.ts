import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-kurum',
  templateUrl: './user-kurum.component.html',
  styleUrls: ['./user-kurum.component.css']
})
export class UserKurumComponent implements OnInit {
  data: any;
  displayedColumns: string[] = ['name', 'mail', 'icon'];


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getAllKurum().subscribe((res) =>{
      this.data = res
    })
  }
  logout() {
    localStorage.removeItem("token")
    this.router.navigate(['login']);
  }
  invoiceDetail(id: any){
    this.userService.getKurum(id).subscribe((res) =>{
      console.log(res)
    })
  }

}
