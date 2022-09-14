import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-user-fatura-dialog',
  templateUrl: './user-fatura-dialog.component.html',
  styleUrls: ['./user-fatura-dialog.component.css']
})
export class UserFaturaDialogComponent implements OnInit {

  month: any = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
  currentMonth: any = this.month[parseInt(this.data.month) - 1] 

  constructor(public dialogRef: MatDialogRef<UserFaturaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

  }

}
