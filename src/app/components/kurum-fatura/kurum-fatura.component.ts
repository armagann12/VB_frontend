import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InvoiceService } from 'src/app/services/invoice.service';
import { KurumService } from 'src/app/services/kurum.service';
import { KurumFaturaDialogComponent } from '../kurum-fatura-dialog/kurum-fatura-dialog.component';

@Component({
  selector: 'app-kurum-fatura',
  templateUrl: './kurum-fatura.component.html',
  styleUrls: ['./kurum-fatura.component.css']
})
export class KurumFaturaComponent implements OnInit {

  initData: any;
  currentData: any;
  selected: any = 'all';
  displayedColumns: string[] = ['name', 'price', 'status', 'icon', 'delete'];

  constructor(private invoiceService: InvoiceService, private router: Router,
    private kurumService: KurumService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.invoiceService.getAllKurumInvoices().subscribe((res) => {
      this.initData = res
      this.currentData = this.initData
    })
  }

  allData() {
    this.currentData = this.initData
  }

  filterData(stat: any) {
    const newData = this.initData.filter((data: any) => data.status === stat)
    this.currentData = newData
  }

  logout() {
    localStorage.removeItem("token")
    this.router.navigate(['login']);
  }

  invoiceDetail(id: any) {
    console.log(id)
    this.invoiceService.getKurumInvoice(id).subscribe((res: any) => {
      console.log(res)
      this.kurumService.getUser(res.userModelId).subscribe((response: any) => {
        const dialogRef = this.dialog.open(KurumFaturaDialogComponent, {
          width: 'auto',
          data: { ...res, userTC: response.tc },
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log(result)
        });
      })
    })
  }

  deleteInvoice(id: any) {
    console.log(id)
  }
}
