import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {JwtModule} from "@auth0/angular-jwt";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AuthGuard} from "./services/auth-guard.service";
import {HomeModule} from "./components/home/home.module";
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginDialogComponent } from './components/account/login-dialog/login-dialog.component';
import { RegisterDialogComponent } from './components/account/register-dialog/register-dialog.component';
import {MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";


export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LoginDialogComponent,
    RegisterDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:44339"],
        disallowedRoutes: []
      }
    }),
    NgbModule,
    FormsModule,
    RouterModule,
    HomeModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDialogModule

  ],
  providers:[
    {
      provide: MatDialogRef,
      useValue: {}
    },
    [AuthGuard]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
