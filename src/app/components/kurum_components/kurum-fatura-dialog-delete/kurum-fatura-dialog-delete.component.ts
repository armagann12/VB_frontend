import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-kurum-fatura-dialog-delete',
  templateUrl: './kurum-fatura-dialog-delete.component.html',
  styleUrls: ['./kurum-fatura-dialog-delete.component.css']
})
export class KurumFaturaDialogDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<KurumFaturaDialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private invoiceService: InvoiceService) { }

  ngOnInit(): void {
  }
  deleteInvoice(id: any) {
    this.invoiceService.deleteInvoice(id).subscribe((res) => {
      
    })
  }
}
