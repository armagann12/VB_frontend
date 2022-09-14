import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-kurum-fatura-dialog',
  templateUrl: './kurum-fatura-dialog.component.html',
  styleUrls: ['./kurum-fatura-dialog.component.css']
})
export class KurumFaturaDialogComponent implements OnInit {
  month: any = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
  currentMonth: any = this.month[parseInt(this.data.month) - 1]

  constructor(public dialogRef: MatDialogRef<KurumFaturaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    
  }

}
