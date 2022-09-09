import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated() {
    throw new Error('Method not implemented.');
  }
  constructor() { }

  public isAuth(): boolean{
    const token = localStorage.getItem('token')
    if(token == null){
      return false
    }
    return true
  }
}
