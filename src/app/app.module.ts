import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './components/register/register.component';
import { KurumComponent } from './components/kurum/kurum.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { KurumInfoComponent } from './components/kurum-info/kurum-info.component';
import { UserFaturaComponent } from './components/user-fatura/user-fatura.component';
import { UserKurumComponent } from './components/user-kurum/user-kurum.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { KurumFaturaComponent } from './components/kurum-fatura/kurum-fatura.component';
import { KurumUserComponent } from './components/kurum-user/kurum-user.component';
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
import { UserFaturaDialogComponent } from './components/user-fatura-dialog/user-fatura-dialog.component';
import { UserKurumDialogComponent } from './components/user-kurum-dialog/user-kurum-dialog.component';
import { KurumFaturaDialogComponent } from './components/kurum-fatura-dialog/kurum-fatura-dialog.component';
import { KurumUserDialogComponent } from './components/kurum-user-dialog/kurum-user-dialog.component';
import { KurumFaturaDialogDeleteComponent } from './components/kurum-fatura-dialog-delete/kurum-fatura-dialog-delete.component';



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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
