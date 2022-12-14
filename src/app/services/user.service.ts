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

    const headers: any = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    const req = this.httpClient.get(this.SERVER + 'user/me', { headers: headers })
    return req
  }

  public getAllKurum() {
    const token = localStorage.getItem("token")

    const headers: any = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    const req = this.httpClient.get(this.SERVER + 'institution', { headers: headers })
    return req
  }

  public getKurum(id: string) {
    const token = localStorage.getItem("token")

    const headers: any = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    const req = this.httpClient.get(this.SERVER + `institution/${id}`, { headers: headers })
    return req
  }

  public updateUser(firstName: any, lastName: any, mail: any, tc: any) {
    const token = localStorage.getItem("token")
    const body = {
      firstName,
      lastName,
      mail,
      tc
    }
    const headers: any = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    const req = this.httpClient.put(this.SERVER + `user/me`, body, { headers: headers })
    return req
  }

  public addCard(bankName: any) {
    const token = localStorage.getItem("token")

    const body = {
      bankName
    }

    const headers: any = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }

    const req = this.httpClient.post(this.SERVER + 'user/card', body, { headers: headers })
    return req
  }

  public getMyCards() {
    const token = localStorage.getItem("token")
    const headers: any = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    const req = this.httpClient.get(this.SERVER + `user/card/me`, { headers: headers })
    return req
  }

  public getMyCard(id: string) {
    const token = localStorage.getItem("token")
    const headers: any = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    const req = this.httpClient.get(this.SERVER + `user/card/me/${id}`, { headers: headers })
    return req
  }

  public deleteMyCard(id: string) {
    const token = localStorage.getItem("token")
    const headers: any = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    const req = this.httpClient.delete(this.SERVER + `user/card/me/${id}`, { headers: headers })
    return req
  }

  public uploadMoneyToCard(id: string, money: any) {
    const token = localStorage.getItem("token")
    const headers: any = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    const req = this.httpClient.get(this.SERVER + `user/card/me/money/${id}/${money}`, { headers: headers })
    return req
  }
}
