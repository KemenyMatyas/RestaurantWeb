import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './home-components/menu-list/menu-list.component';
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home-routing.module";
import { CartComponent } from './home-components/cart/cart.component';
import { FilterComponent } from './home-components/filter/filter.component';
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {NgxMatSelectSearchModule} from "ngx-mat-select-search";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    MenuListComponent,
    HomeComponent,
    CartComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    FormsModule,

  ]
})
export class HomeModule { }
