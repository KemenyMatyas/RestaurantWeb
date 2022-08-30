import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AuthGuard} from "../../services/auth-guard.service";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {HomeComponent} from "./home.component";
import {MenuListComponent} from "./home-components/menu-list/menu-list.component";




const routes: Routes = [
  {path: '',  component:HomeComponent, canActivate: [AuthGuard]},
  {path: 'home', component:HomeComponent},
  {path: 'homelist', component: MenuListComponent},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
