import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-kurum-fatura',
  templateUrl: './kurum-fatura.component.html',
  styleUrls: ['./kurum-fatura.component.css']
})
export class KurumFaturaComponent implements OnInit {

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.invoiceService.getAllKurumInvoices().subscribe((res) =>{
      console.log(res)
    })
  }

}
