import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KurumService } from 'src/app/services/kurum.service';

@Component({
  selector: 'app-kurum-user',
  templateUrl: './kurum-user.component.html',
  styleUrls: ['./kurum-user.component.css']
})
export class KurumUserComponent implements OnInit {
  data: any;
  displayedColumns: string[] = ['name', 'mail'];

  constructor(private kurumService: KurumService, private router: Router) { }

  ngOnInit(): void {
    this.kurumService.getAllUsers().subscribe((res) => {
      this.data = res
    })
  }

  logout() {
    localStorage.removeItem("token")
    this.router.navigate(['login']);
  }
}
