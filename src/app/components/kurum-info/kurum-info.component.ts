import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KurumService } from 'src/app/services/kurum.service';

@Component({
  selector: 'app-kurum-info',
  templateUrl: './kurum-info.component.html',
  styleUrls: ['./kurum-info.component.css']
})
export class KurumInfoComponent implements OnInit {
  name: any;
  mail: any;
  detail: any;
  data: any;


  constructor(private kurumService: KurumService, private router: Router) { }

  ngOnInit(): void {
    this.kurumService.getKurum().subscribe((res: any) => {
      this.data = res
      this.name = res.name
      this.mail = res.mail
      this.detail = res.detail
    })
  }

  logout() {
    localStorage.removeItem("token")
    this.router.navigate(['login']);
  }

  onInfoChange() {
    const name = this.name
    const mail = this.mail
    const detail = this.detail
    this.kurumService.updateKurum(name, mail, detail).subscribe((res) => {
      console.log(res)
      console.log("Sucsess")
    })
  }

}
