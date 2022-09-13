import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserKurumDialogComponent } from '../user-kurum-dialog/user-kurum-dialog.component';

@Component({
  selector: 'app-user-kurum',
  templateUrl: './user-kurum.component.html',
  styleUrls: ['./user-kurum.component.css']
})
export class UserKurumComponent implements OnInit {
  data: any;
  displayedColumns: string[] = ['name', 'mail', 'icon'];


  constructor(private userService: UserService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.getAllKurum().subscribe((res) =>{
      this.data = res
    })
  }
  logout() {
    localStorage.removeItem("token")
    this.router.navigate(['login']);
  }
  kurumDetail(id: any){
    this.userService.getKurum(id).subscribe((res) =>{
      const dialogRef = this.dialog.open(UserKurumDialogComponent, {
        width: 'auto',
        data: { ...res},
      });
      dialogRef.afterClosed().subscribe(result => {
      });
    })
  }

}
