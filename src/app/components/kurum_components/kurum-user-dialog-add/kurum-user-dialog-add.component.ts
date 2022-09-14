import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-kurum-user-dialog-add',
  templateUrl: './kurum-user-dialog-add.component.html',
  styleUrls: ['./kurum-user-dialog-add.component.css']
})
export class KurumUserDialogAddComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<KurumUserDialogAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private invoiceService: InvoiceService) { }

  ngOnInit(): void {
  }
  addInvoice() {
    if (this.data.name !== undefined && this.data.detail !== undefined && this.data.price !== undefined) {
      this.invoiceService.postInvoice(this.data.name, this.data.price, this.data.detail, this.data.userModelId).subscribe((res) => {
      })
    }
    }
  }
