import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-kurum-user-dialog',
  templateUrl: './kurum-user-dialog.component.html',
  styleUrls: ['./kurum-user-dialog.component.css']
})
export class KurumUserDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<KurumUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
