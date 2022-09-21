import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KurumFaturaComponent } from './components/kurum_components/kurum-fatura/kurum-fatura.component';
import { KurumInfoComponent } from './components/kurum_components/kurum-info/kurum-info.component';
import { KurumUserComponent } from './components/kurum_components/kurum-user/kurum-user.component';
import { KurumComponent } from './components/kurum_components/kurum/kurum.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserCardComponent } from './components/user_components/user-card/user-card.component';
import { UserFaturaComponent } from './components/user_components/user-fatura/user-fatura.component';
import { UserInfoComponent } from './components/user_components/user-info/user-info.component';
import { UserKurumComponent } from './components/user_components/user-kurum/user-kurum.component';
import { UserComponent } from './components/user_components/user/user.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { RoleGuardService as RoleGuard } from './services/role-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'kurum', component: KurumComponent, canActivate: [RoleGuard], data: {
      expectedRole: 'Institution'
    }, children: [
      { path: 'info', component: KurumInfoComponent },
      { path: 'fatura', component: KurumFaturaComponent },
      { path: 'user', component: KurumUserComponent }
    ]
  },
  {
    path: 'user', component: UserComponent, canActivate: [RoleGuard], data: {
      expectedRole: 'User'
    }, children: [
      { path: 'info', component: UserInfoComponent },
      { path: 'fatura', component: UserFaturaComponent },
      { path: 'card', component: UserCardComponent },
      { path: 'kurum', component: UserKurumComponent }
    ]
  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
