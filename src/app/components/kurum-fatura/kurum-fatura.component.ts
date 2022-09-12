import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-kurum-fatura',
  templateUrl: './kurum-fatura.component.html',
  styleUrls: ['./kurum-fatura.component.css']
})
export class KurumFaturaComponent implements OnInit {

  initData: any;
  currentData: any;
  selected: any = 'all';
  displayedColumns: string[] = ['name', 'price', 'status'];

  constructor(private invoiceService: InvoiceService, private router: Router) { }

  ngOnInit(): void {
    this.invoiceService.getAllKurumInvoices().subscribe((res) => {
      this.initData = res
      this.currentData = this.initData
    })
  }

  allData(){
    this.currentData = this.initData
  }

  filterData(stat: any){
    const newData = this.initData.filter((data :any) => data.status === stat)
    this.currentData = newData
  }

  logout() {
    localStorage.removeItem("token")
    this.router.navigate(['login']);
  }

}
