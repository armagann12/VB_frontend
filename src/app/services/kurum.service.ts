import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class KurumService {
  private SERVER = "https://localhost:7178/api/";

  constructor(private httpClient: HttpClient, private router: Router) { }

  public getKurum() {
    const token = localStorage.getItem("token")

    const headers: any ={
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }

    const req = this.httpClient.get(this.SERVER + 'institution/me', { headers: headers})
    return req
  }

  public getAllUsers() {
    const token = localStorage.getItem("token")

    const headers: any ={
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    const req = this.httpClient.get(this.SERVER + 'user', { headers: headers})
    return req
  }
}
