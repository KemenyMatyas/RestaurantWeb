import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AuthGuard} from "./services/auth-guard.service";
import {LoginComponent} from "./components/account/login/login.component";
import {RegisterComponent} from "./components/account/register/register.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {HomeComponent} from "./components/home/home.component";



const routes: Routes = [
  {path: '',  component:HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'home', component:HomeComponent},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
