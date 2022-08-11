import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './home-components/menu-list/menu-list.component';
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home-routing.module";



@NgModule({
  declarations: [
    MenuListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
