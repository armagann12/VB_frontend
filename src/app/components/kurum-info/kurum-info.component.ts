import { Component, OnInit } from '@angular/core';
import { KurumService } from 'src/app/services/kurum.service';

@Component({
  selector: 'app-kurum-info',
  templateUrl: './kurum-info.component.html',
  styleUrls: ['./kurum-info.component.css']
})
export class KurumInfoComponent implements OnInit {

  constructor(private kurumService: KurumService) { }

  ngOnInit(): void {
    this.kurumService.getKurum().subscribe((res) => {
      console.log(res)
    })
  }

}
