import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-kurum-dialog',
  templateUrl: './user-kurum-dialog.component.html',
  styleUrls: ['./user-kurum-dialog.component.css']
})
export class UserKurumDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UserKurumDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
