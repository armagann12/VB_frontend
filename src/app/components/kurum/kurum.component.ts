import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kurum',
  templateUrl: './kurum.component.html',
  styleUrls: ['./kurum.component.css']
})
export class KurumComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    console.log("You are Logging Out")
    localStorage.removeItem("token")
    this.router.navigate(['login']);
  }
}
