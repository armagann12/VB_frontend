import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated() {
    throw new Error('Method not implemented.');
  }

  private SERVER = "https://localhost:7178/api/auth/";

  constructor(private httpClient: HttpClient, private router: Router) { }

  public isAuth(): boolean {
    const token = localStorage.getItem('token')
    if (token == null) {
      return false
    }
    return true
  }

  public userLogin(mail: any, password: any) {
    const body = {
      mail,
      password
    }
    const req = this.httpClient.post('https://localhost:7178/api/auth/user/login', body, { responseType: 'text' })
    return req
  }

  public kurumLogin(mail: any, password: any) {
    const body = {
      mail,
      password
    }
    const req = this.httpClient.post(this.SERVER + "institution/login", body, { responseType: 'text' })
    return req
  }
}

