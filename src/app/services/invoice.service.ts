import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private SERVER = "https://localhost:7178/api/";

  constructor(private httpClient: HttpClient) { }

  public getAllUsersInvoices() {
    //Status true false var
    const token = localStorage.getItem("token")

    const headers: any = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    const req = this.httpClient.get(this.SERVER + "invoice/user", { headers: headers })
    return req
  }

  public getUserInvoices(id:string) {
    //Status true false var
    const token = localStorage.getItem("token")

    const headers: any = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    const req = this.httpClient.get(this.SERVER + `invoice/user/${id}`, { headers: headers })
    return req
  }

  public getAllKurumInvoices() {
    //Status true false var
    const token = localStorage.getItem("token")

    const headers: any = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    const req = this.httpClient.get(this.SERVER + "invoice/institution", { headers: headers })
    return req
  }

  public getKurumInvoices(id:string) {
    //Status true false var
    const token = localStorage.getItem("token")

    const headers: any = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    const req = this.httpClient.get(this.SERVER + `invoice/institution/${id}`, { headers: headers })
    return req
  }
}
