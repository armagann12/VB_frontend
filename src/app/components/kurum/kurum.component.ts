import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KurumService } from 'src/app/services/kurum.service';

@Component({
  selector: 'app-kurum',
  templateUrl: './kurum.component.html',
  styleUrls: ['./kurum.component.css']
})
export class KurumComponent implements OnInit {

  constructor(private router: Router, private kurumService: KurumService) { }

  ngOnInit(): void {
    this.kurumService.getAllUsers().subscribe((res) => {
      console.log(res)
    })
  }
  logout(){
    console.log("You are Logging Out")
    localStorage.removeItem("token")
    this.router.navigate(['login']);
  }
}
