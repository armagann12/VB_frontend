import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KurumService } from 'src/app/services/kurum.service';

@Component({
  selector: 'app-kurum-info',
  templateUrl: './kurum-info.component.html',
  styleUrls: ['./kurum-info.component.css']
})
export class KurumInfoComponent implements OnInit {
  data: any;
  constructor(private kurumService: KurumService, private router: Router) { }

  ngOnInit(): void {
    this.kurumService.getKurum().subscribe((res) => {
      console.log(res)
      this.data = res
    })
  }

  logout() {
    console.log("You are Logging Out")
    localStorage.removeItem("token")
    this.router.navigate(['login']);
  }
}
