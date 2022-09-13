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

  fatura: any = 'fatura'
  user: any = 'user'
  info: any = 'info'

  constructor(private router: Router, private kurumService: KurumService, private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    
  }
  logout() {
    localStorage.removeItem("token")
    this.router.navigate(['login']);
  }

  navigate(event:any, item:any){
    this.router.navigate([`kurum/${item}`]);
  }
}
