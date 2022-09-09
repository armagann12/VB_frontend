import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KurumComponent } from './components/kurum/kurum.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { RoleGuardService as RoleGuard } from './services/role-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'kurum', component: KurumComponent, canActivate:[RoleGuard], data: { 
    expectedRole: 'Institution'
  }  },
  { path: 'user', component: UserComponent, canActivate:[RoleGuard], data: { 
    expectedRole: 'User'
  }  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
