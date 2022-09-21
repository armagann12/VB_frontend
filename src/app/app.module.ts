import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './components/user_components/user/user.component';
import { RegisterComponent } from './components/register/register.component';
import { KurumComponent } from './components/kurum_components/kurum/kurum.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './components/user_components/user-info/user-info.component';
import { KurumInfoComponent } from './components/kurum_components/kurum-info/kurum-info.component';
import { UserFaturaComponent } from './components/user_components/user-fatura/user-fatura.component';
import { UserKurumComponent } from './components/user_components/user-kurum/user-kurum.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { KurumFaturaComponent } from './components/kurum_components/kurum-fatura/kurum-fatura.component';
import { KurumUserComponent } from './components/kurum_components/kurum-user/kurum-user.component';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { UserFaturaDialogComponent } from './components/user_components/user-fatura-dialog/user-fatura-dialog.component';
import { UserKurumDialogComponent } from './components/user_components/user-kurum-dialog/user-kurum-dialog.component';
import { KurumFaturaDialogComponent } from './components/kurum_components/kurum-fatura-dialog/kurum-fatura-dialog.component';
import { KurumUserDialogComponent } from './components/kurum_components/kurum-user-dialog/kurum-user-dialog.component';
import { KurumFaturaDialogDeleteComponent } from './components/kurum_components/kurum-fatura-dialog-delete/kurum-fatura-dialog-delete.component';
import { KurumUserDialogAddComponent } from './components/kurum_components/kurum-user-dialog-add/kurum-user-dialog-add.component';
import { UserFaturaDialogPayComponent } from './components/user_components/user-fatura-dialog-pay/user-fatura-dialog-pay.component';
import { MatPaginatorModule } from '@angular/material/paginator';

import { ToastrModule } from 'ngx-toastr';
import { UserCardComponent } from './components/user_components/user-card/user-card.component';
import { UserCardDialogAddComponent } from './components/user_components/user-card-dialog-add/user-card-dialog-add.component';
import { UserCardDialogDeleteComponent } from './components/user_components/user-card-dialog-delete/user-card-dialog-delete.component';
import { UserCardDialogMoneyComponent } from './components/user_components/user-card-dialog-money/user-card-dialog-money.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    LoginComponent,
    KurumComponent,
    UserInfoComponent,
    KurumInfoComponent,
    UserFaturaComponent,
    UserKurumComponent,
    KurumFaturaComponent,
    KurumUserComponent,
    UserFaturaDialogComponent,
    UserKurumDialogComponent,
    KurumFaturaDialogComponent,
    KurumUserDialogComponent,
    KurumFaturaDialogDeleteComponent,
    KurumUserDialogAddComponent,
    UserFaturaDialogPayComponent,
    UserCardComponent,
    UserCardDialogAddComponent,
    UserCardDialogDeleteComponent,
    UserCardDialogMoneyComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
