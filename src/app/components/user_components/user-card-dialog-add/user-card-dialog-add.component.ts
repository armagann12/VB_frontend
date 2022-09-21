import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-card-dialog-add',
  templateUrl: './user-card-dialog-add.component.html',
  styleUrls: ['./user-card-dialog-add.component.css']
})
export class UserCardDialogAddComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UserCardDialogAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService) { }

  ngOnInit(): void {

  }

  addCard() {
    if (this.data.bankName !== undefined) {
      this.userService.addCard(this.data.bankName).subscribe((res: any) => {
        this.data.id = res.id
        this.data.balance = res.balance
        this.data.bankName = res.bankName
        this.data.cvc = res.cvc
        this.data.number = res.number
        this.data.userModelId = res.userModelId
        this.data.userName = res.userName
        this.data.validDate = res.validDate
      })
    }
  }

}
