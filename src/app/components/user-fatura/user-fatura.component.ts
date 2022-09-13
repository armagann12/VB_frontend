import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InvoiceService } from 'src/app/services/invoice.service';
import { UserService } from 'src/app/services/user.service';
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
    public dialog: MatDialog, private userService: UserService) { }

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
      console.log(res);
      this.userService.getKurum(res.institutionModelId).subscribe((response: any) => {
        const dialogRef = this.dialog.open(UserFaturaDialogComponent, {
          width: 'auto',
          data: { ...res, kurumName: response.name },
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log(result)
        });
      })
    })
  }

  payInvoice(id: any){

    //yeni dalog pay yaptıktan sonra mapla status trueya dönmeli aynı zmaanda!!
    // this.invoiceService.payInvoice(id).subscribe((res) => console.log(res))
    console.log(id)
  }

}
