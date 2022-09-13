import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-user-fatura-dialog-pay',
  templateUrl: './user-fatura-dialog-pay.component.html',
  styleUrls: ['./user-fatura-dialog-pay.component.css']
})
export class UserFaturaDialogPayComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UserFaturaDialogPayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private invoiceService: InvoiceService) { }

  ngOnInit(): void {
  }
  
  payInvoice(id: any){
    this.invoiceService.payInvoice(id).subscribe((res) =>{
    })
  }

}
