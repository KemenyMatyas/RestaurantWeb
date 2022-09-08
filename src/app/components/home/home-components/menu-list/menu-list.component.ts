import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../../../services/home-service";
import {MenuItem} from "../../../../models/MenuItem";

@Component({
  selector: 'home-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  menuItems: MenuItem[] | undefined
  count : number = 0

  ngOnInit(): void {
    this.GetMenuItems();
  }

  GetMenuItems(){
    this.homeService.GetMenuItems().subscribe(response => {
      if (response.isSuccess) {
        this.menuItems = response.data;
        this.count = response.total;
      }else {
      }
    })
  }
}
