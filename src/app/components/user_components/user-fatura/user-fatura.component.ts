import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InvoiceService } from 'src/app/services/invoice.service';
import { UserService } from 'src/app/services/user.service';
import { UserFaturaDialogPayComponent } from '../user-fatura-dialog-pay/user-fatura-dialog-pay.component';
import { UserFaturaDialogComponent } from '../user-fatura-dialog/user-fatura-dialog.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-fatura',
  templateUrl: './user-fatura.component.html',
  styleUrls: ['./user-fatura.component.css']
})
export class UserFaturaComponent implements OnInit {
  initData: any;
  currentData: any;
  dataSource: any;
  selected: any = 'all';
  displayedColumns: string[] = ['name', 'price', 'status', 'icon', 'pay'];
  clickedRows = new Set<any>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  constructor(private invoiceService: InvoiceService, private router: Router,
    public dialog: MatDialog, private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.invoiceService.getAllUsersInvoices().subscribe((res) => {
      this.initData = res
      this.currentData = this.initData.reverse()
      this.dataSource = new MatTableDataSource<any>(this.currentData);
      this.dataSource.paginator = this.paginator;

      const initIdStr: any = sessionStorage.getItem("payed")
      if (initIdStr !== null) {
        const initIdArr: any = JSON.parse(initIdStr)

        this.currentData = this.currentData.map((i: any) => {
          for (var j = 0; j < initIdArr.length; j++) {
            if (i.id === initIdArr[j]) {
              i.status = true
            }
          }
          this.dataSource = new MatTableDataSource<any>(this.currentData);
          this.dataSource.paginator = this.paginator;
          return i
        })
      }

    })
  }

  allData() {
    this.currentData = this.initData
    this.dataSource = new MatTableDataSource<any>(this.currentData);
    this.dataSource.paginator = this.paginator;
  }

  filterData(stat: any) {
    const newData = this.initData.filter((data: any) => data.status === stat)
    this.currentData = newData
    this.dataSource = new MatTableDataSource<any>(this.currentData);
    this.dataSource.paginator = this.paginator;
  }

  logout() {
    localStorage.removeItem("token")
    this.router.navigate(['login']);
  }

  invoiceDetail(id: any) {

    this.invoiceService.getUserInvoice(id).subscribe((res: any) => {
      const strItems = sessionStorage.getItem('payed')
      if (strItems !== null) {
        const arrItems = JSON.parse(strItems)
        for (var j = 0; j < arrItems.length; j++) {
          if (res.id === arrItems[j]) {
            res.status = true
          }
        }
      }
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
        const arr = []
        const strItems = sessionStorage.getItem('payed')
        if (strItems == null) {
          arr.push(id)
          sessionStorage.setItem('payed', JSON.stringify(arr))
        } else {
          const arrItems = JSON.parse(strItems)
          arrItems.push(id)
          sessionStorage.setItem('payed', JSON.stringify(arrItems))
        }

        this.currentData = this.currentData.map((i: any) => {
          if (i.id === id) {
            i.status = true
          }
          return i
        })
        this.dataSource = new MatTableDataSource<any>(this.currentData);
        this.dataSource.paginator = this.paginator;
        this.toastr.success("Fatura Ödendi", "", { timeOut: 3000 })
      }
    }, ((err) => {
      console.log(err)
      this.toastr.success("Hata", "", { timeOut: 3000 })
    }));

  }

}
