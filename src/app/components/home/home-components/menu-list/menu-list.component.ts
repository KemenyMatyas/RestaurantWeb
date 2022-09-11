import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HomeService} from "../../../../services/home-service";
import {MenuItem} from "../../../../models/MenuItem";
import {PageEvent} from "@angular/material/paginator";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'home-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  params = new HttpParams()


  pageSize: number = 10
  pageNumber: number = 1
  name = ""
  category : string = ""
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

  setParams() {
    if (this.name) {
      this.params = this.params.set('name', this.name)
    } else {
      this.params = this.params.delete('name')
    }
    if (this.category) {
      this.params = this.params.set('category', this.category)
    } else {
      this.params = this.params.delete('category')
    }

    this.params = this.params.set('pageSize', this.pageSize.toString())
    this.params = this.params.set('pageNumber', this.pageNumber.toString())

    this.GetManuItemsFilter()
  }


  OnPageChange(event: PageEvent){
    this.pageSize = event.pageSize;
    this.pageNumber = event.pageIndex;
    this.setParams()
  }






  GetManuItemsFilter(){
    this.homeService.GetMenuItemsPagination(this.params).subscribe(response => {
      if (response.isSuccess) {
        this.menuItems = response.data;
        this.count = response.total;
      }else {
      }
    })
  }
}
