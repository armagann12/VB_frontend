import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InvoiceService } from 'src/app/services/invoice.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-fatura-dialog-pay',
  templateUrl: './user-fatura-dialog-pay.component.html',
  styleUrls: ['./user-fatura-dialog-pay.component.css']
})
export class UserFaturaDialogPayComponent implements OnInit {
  invoicePrice: any
  myCards: any = [];
  chosenCard: any = undefined;
  chosenCardDetail: any;

  constructor(public dialogRef: MatDialogRef<UserFaturaDialogPayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private invoiceService: InvoiceService, 
    private userService: UserService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.invoicePrice = this.data.price
    this.userService.getMyCards().subscribe((res: any) => {
      this.myCards = res
    })
  }

  payInvoice(id: any) {
    const cardBalance = this.chosenCardDetail.balance

    if (cardBalance < this.invoicePrice) {
      this.toastr.error("Yetersiz Bakiye", "", { timeOut: 3000 })
      this.router.navigate(['user/card']);
      this.data.id = undefined
    } else {
      this.invoiceService.payInvoice(id).subscribe((res) =>{
        this.userService.uploadMoneyToCard(this.chosenCard, -this.invoicePrice).subscribe((res) => {
        })
      })
    }
  }

  chooseCard(id: any) {
    this.chosenCard = id
    this.chosenCardDetail = this.myCards.filter((el: any) => el.id === id)[0]
  }

}
