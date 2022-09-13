import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InvoiceService } from 'src/app/services/invoice.service';
import { KurumService } from 'src/app/services/kurum.service';
import { KurumFaturaDialogDeleteComponent } from '../kurum-fatura-dialog-delete/kurum-fatura-dialog-delete.component';
import { KurumFaturaDialogComponent } from '../kurum-fatura-dialog/kurum-fatura-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';
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
    private kurumService: KurumService, public dialog: MatDialog, private toastr: ToastrService) { }

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
    this.invoiceService.getKurumInvoice(id).subscribe((res: any) => {
      this.kurumService.getUser(res.userModelId).subscribe((response: any) => {
        const dialogRef = this.dialog.open(KurumFaturaDialogComponent, {
          width: 'auto',
          data: { ...res, userTC: response.tc },
        });
        dialogRef.afterClosed().subscribe(result => {
        });
      })
    })
  }

  deleteInvoice(id: any) {
    const dialogRef = this.dialog.open(KurumFaturaDialogDeleteComponent, {
      width: 'auto',
      data: { id: id },
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
        this.currentData = this.currentData.filter((a: any) => a.id !== result)
        this.toastr.success("Fatura Silindi","", {timeOut: 3000})
      }
    });
  }
}
