import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InvoiceService } from 'src/app/services/invoice.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-card-dialog-delete',
  templateUrl: './user-card-dialog-delete.component.html',
  styleUrls: ['./user-card-dialog-delete.component.css']
})
export class UserCardDialogDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UserCardDialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService) { }

  ngOnInit(): void {
  }

  deleteCard(id: any) {
    this.userService.deleteMyCard(id).subscribe((res) => {
      
    })
  }

}
