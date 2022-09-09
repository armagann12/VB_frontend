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

  constructor(private router: Router, private userService: UserService, private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    /*
    this.userService.getAllKurum().subscribe((res) =>{
      console.log(res)
    })
    */
    /*
     const num = "3"
     this.userService.getKurum(num).subscribe((res) => {
       console.log(res)
     })
     */
    /*
    this.invoiceService.getAllUsersInvoices().subscribe((res) => {
      console.log(res)
    })
    const num = "8"
    this.invoiceService.getUserInvoices(num).subscribe((res) => {
      console.log(res)
    })
    */
  }

  logout() {
    console.log("You are Logging Out")
    localStorage.removeItem("token")
    this.router.navigate(['login']);
  }
}
