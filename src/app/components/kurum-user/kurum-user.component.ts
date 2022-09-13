import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { KurumService } from 'src/app/services/kurum.service';
import { KurumUserDialogComponent } from '../kurum-user-dialog/kurum-user-dialog.component';

@Component({
  selector: 'app-kurum-user',
  templateUrl: './kurum-user.component.html',
  styleUrls: ['./kurum-user.component.css']
})
export class KurumUserComponent implements OnInit {
  data: any;
  displayedColumns: string[] = ['name', 'mail', 'icon'];

  constructor(private kurumService: KurumService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.kurumService.getAllUsers().subscribe((res) => {
      this.data = res
    })
  }

  logout() {
    localStorage.removeItem("token")
    this.router.navigate(['login']);
  }

  userDetail(id: any) {
    this.kurumService.getUser(id).subscribe((res) =>{
      const dialogRef = this.dialog.open(KurumUserDialogComponent, {
        width: 'auto',
        data: { ...res},
      });
      dialogRef.afterClosed().subscribe(result => {
      });
    })
  }
}
