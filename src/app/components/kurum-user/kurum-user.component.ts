import { Component, OnInit } from '@angular/core';
import { KurumService } from 'src/app/services/kurum.service';

@Component({
  selector: 'app-kurum-user',
  templateUrl: './kurum-user.component.html',
  styleUrls: ['./kurum-user.component.css']
})
export class KurumUserComponent implements OnInit {

  constructor(private kurumService: KurumService) { }

  ngOnInit(): void {
    this.kurumService.getAllUsers().subscribe((res) =>{
      console.log(res)
    })
  }

}
