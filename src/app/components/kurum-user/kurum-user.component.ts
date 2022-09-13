import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { KurumService } from 'src/app/services/kurum.service';
import { KurumUserDialogAddComponent } from '../kurum-user-dialog-add/kurum-user-dialog-add.component';
import { KurumUserDialogComponent } from '../kurum-user-dialog/kurum-user-dialog.component';

@Component({
  selector: 'app-kurum-user',
  templateUrl: './kurum-user.component.html',
  styleUrls: ['./kurum-user.component.css']
})
export class KurumUserComponent implements OnInit {
  data: any;
  name: any;
  detail: any;
  price: any;
  displayedColumns: string[] = ['name', 'mail', 'icon', 'add'];

  constructor(private kurumService: KurumService, private router: Router, public dialog: MatDialog, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.kurumService.getAllUsers().subscribe((res) => {
      this.data = res
    })
  }

  logout() {
    localStorage.removeItem("token")
    this.router.navigate(['login']);
  }

  userDetail(id: any) {
    this.kurumService.getUser(id).subscribe((res) => {
      const dialogRef = this.dialog.open(KurumUserDialogComponent, {
        width: 'auto',
        data: { ...res },
      });
      dialogRef.afterClosed().subscribe(result => {
      });
    })
  }

  addInvoice(id: any) {
    const dialogRef = this.dialog.open(KurumUserDialogAddComponent, {
      width: 'auto',
      data: { name: this.name, price: this.price, detail: this.detail, userModelId: id },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.toastr.success("Fatura Eklendi", "", { timeOut: 3000 })
      }
    });
  }
}
