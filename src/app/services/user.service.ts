import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private SERVER = "https://localhost:7178/api/";

  constructor(private httpClient: HttpClient, private router: Router) { }

  public getUser() {
    const token = localStorage.getItem("token")

    const headers: any ={
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    const req = this.httpClient.get(this.SERVER + 'user/me', { headers: headers})
    return req
  }
}
