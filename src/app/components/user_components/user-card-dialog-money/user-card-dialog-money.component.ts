import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-card-dialog-money',
  templateUrl: './user-card-dialog-money.component.html',
  styleUrls: ['./user-card-dialog-money.component.css']
})
export class UserCardDialogMoneyComponent implements OnInit {
  money: any = 0;

  constructor(public dialogRef: MatDialogRef<UserCardDialogMoneyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService) { }

  ngOnInit(): void {
  }

  moneyCard(id:any){
    
    if(this.money > 0){
      this.userService.uploadMoneyToCard(id, parseInt(this.money)).subscribe((res) =>{
  
      })
    }else{
      this.data.balance = undefined
    }
  }
}
