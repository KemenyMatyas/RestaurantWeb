import { Component, OnInit } from '@angular/core';
import {HttpParams} from "@angular/common/http";
import {PageEvent} from "@angular/material/paginator";
import {MenuItem} from "../../models/MenuItem";
import {HomeService} from "../../services/home-service";
import {compareSegments} from "@angular/compiler-cli/src/ngtsc/sourcemaps/src/segment_marker";
import {SearchData} from "../../models/SearchData";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private homeService : HomeService) { }

  ngOnInit(): void {
    this.SetParams()
    this.GetManuItemsFilter()
  }

  params = new HttpParams()
  pageSize: number = 10
  pageNumber: number = 0
  searchWord = ""
  categoryId : string = ""
  menuItems: MenuItem[] | undefined
  count : number = 0

  Search(searchData : SearchData){
    this.searchWord = searchData.searchWord
    this.categoryId = searchData.category
    this.SetParams()
  }

  OnPageChange(event: PageEvent){
    this.pageSize = event.pageSize;
    this.pageNumber = event.pageIndex;
    this.SetParams()
  }


  SetParams() {
    if (this.searchWord) {
      this.params = this.params.set('Name', this.searchWord)
    } else {
      this.params = this.params.delete('Name')
    }
    if (this.categoryId) {
      this.params = this.params.set('CategoryId', this.categoryId)
    } else {
      this.params = this.params.delete('CategoryId')
    }

    this.params = this.params.set('PageSize', this.pageSize.toString())
    this.params = this.params.set('PageNumber', this.pageNumber.toString())

    this.GetManuItemsFilter()
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
