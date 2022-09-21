import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { UserCardDialogAddComponent } from '../user-card-dialog-add/user-card-dialog-add.component';
import { UserCardDialogDeleteComponent } from '../user-card-dialog-delete/user-card-dialog-delete.component';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  myCards: any[] = [];
  bankName: any;
  number: any;

  constructor(private userService: UserService, private router: Router, private toastr: ToastrService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.getMyCards().subscribe((res: any) => {
      console.log(res, 'res')
      this.myCards = res
      console.log(this.myCards, 'cards')
    })
  }

  logout() {
    localStorage.removeItem("token")
    this.router.navigate(['login']);
  }

  addCard() {
    const dialogRef = this.dialog.open(UserCardDialogAddComponent, {
      width: 'auto',
      data: { bankName: this.bankName },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result, "result")
      if (result !== undefined) {
        if (result.bankName !== undefined) {
          this.toastr.success("Card Eklendi", "", { timeOut: 3000 })
          this.myCards = [...this.myCards, result]
        } else {
          this.toastr.error("Hata", "", { timeOut: 3000 })
        }
      }
    });
  }
  deleteCard(id: any) {
    const dialogRef = this.dialog.open(UserCardDialogDeleteComponent, {
      width: 'auto',
      data: { id: id },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if (result !== undefined) {
        this.myCards = this.myCards.filter(el => el.id !== result)
      }
    }, ((err) => {
      this.toastr.error("Hata", "", { timeOut: 3000 })
      console.log(err)
    }));
  }

  moneyCard(id: any) {

  }
}