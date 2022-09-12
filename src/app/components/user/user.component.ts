import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvoiceService } from 'src/app/services/invoice.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  fatura: any = "fatura";
  info: any = "info";
  kurum: any = "kurum";

  constructor(private router: Router, private userService: UserService, private invoiceService: InvoiceService) { }

  ngOnInit(): void {
  
  }

  logout() {
    console.log("You are Logging Out")
    localStorage.removeItem("token")
    this.router.navigate(['login']);
  }

  navigate(event:any, item: any){
    this.router.navigate([`user/${item}`]);
  }
}
