import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvoiceService } from 'src/app/services/invoice.service';
import { KurumService } from 'src/app/services/kurum.service';

@Component({
  selector: 'app-kurum',
  templateUrl: './kurum.component.html',
  styleUrls: ['./kurum.component.css']
})
export class KurumComponent implements OnInit {

  constructor(private router: Router, private kurumService: KurumService, private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    /*
    this.kurumService.getAllUsers().subscribe((res) => {
      console.log(res)
    })
    */
    /*
     const num = "9"
     this.kurumService.getUser(num).subscribe((res) => {
       console.log(res)
     })
     */
    /*
    this.invoiceService.getAllKurumInvoices().subscribe((res) => {
      console.log(res)
    })
    */
   /*
    const num = "8"
    this.invoiceService.getKurumInvoices(num).subscribe((res) => {
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
