import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InvoiceService } from 'src/app/services/invoice.service';
import { UserService } from 'src/app/services/user.service';
import { UserFaturaDialogPayComponent } from '../user-fatura-dialog-pay/user-fatura-dialog-pay.component';
import { UserFaturaDialogComponent } from '../user-fatura-dialog/user-fatura-dialog.component';

@Component({
  selector: 'app-user-fatura',
  templateUrl: './user-fatura.component.html',
  styleUrls: ['./user-fatura.component.css']
})
export class UserFaturaComponent implements OnInit {
  initData: any;
  currentData: any;
  selected: any = 'all';
  displayedColumns: string[] = ['name', 'price', 'status', 'icon', 'pay'];
  clickedRows = new Set<any>();

  constructor(private invoiceService: InvoiceService, private router: Router,
    public dialog: MatDialog, private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.invoiceService.getAllUsersInvoices().subscribe((res) => {
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
    this.invoiceService.getUserInvoice(id).subscribe((res: any) => {
      this.userService.getKurum(res.institutionModelId).subscribe((response: any) => {
        const dialogRef = this.dialog.open(UserFaturaDialogComponent, {
          width: 'auto',
          data: { ...res, kurumName: response.name },
        });
        dialogRef.afterClosed().subscribe(result => {
        });
      })
    })
  }

  payInvoice(id: any) {
    const dialogRef = this.dialog.open(UserFaturaDialogPayComponent, {
      width: 'auto',
      data: { id: id },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.currentData.map((i: any) => {
          if (i.id === result) {
            i.status = true
          }
        })
        this.toastr.success("Fatura Ödendi", "", { timeOut: 3000 })
      }
    });

  }

}
