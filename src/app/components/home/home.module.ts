import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './home-components/menu-list/menu-list.component';
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home-routing.module";
import { CartComponent } from './home-components/cart/cart.component';
import { FilterComponent } from './home-components/filter/filter.component';



@NgModule({
  declarations: [
    MenuListComponent,
    HomeComponent,
    CartComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
