import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-user-fatura',
  templateUrl: './user-fatura.component.html',
  styleUrls: ['./user-fatura.component.css']
})
export class UserFaturaComponent implements OnInit {
  initData: any;
  currentData:any;
  selected: any = 'all';
  displayedColumns: string[] = ['name', 'price', 'status', 'icon', 'pay'];
  clickedRows = new Set<any>();

  constructor(private invoiceService: InvoiceService, private router: Router) { }

  ngOnInit(): void {
    this.invoiceService.getAllUsersInvoices().subscribe((res) =>{
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

  invoiceDetail(id: any){
    this.invoiceService.getUserInvoice(id).subscribe((res) =>{
      console.log(res)
    })
  }
}
