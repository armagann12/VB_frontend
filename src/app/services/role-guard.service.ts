import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';
import decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    const expectedRole = route.data['expectedRole'];
    const token: any = localStorage.getItem('token');
    const tokenPayload: any = decode(token);
    const arr = Object.values(tokenPayload)
    const role = arr[1]
    if (
      !this.auth.isAuth() || 
      role !== expectedRole
    ) {
      this.router.navigate(['login']);
      return false;
    }
    console.log(role)
    return true;
  }
}
