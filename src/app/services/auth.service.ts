import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuth(): boolean{
    const token = localStorage.getItem('token')
    console.log(token)
    if(token == null){
      return false
    }
    return true
  }
}
