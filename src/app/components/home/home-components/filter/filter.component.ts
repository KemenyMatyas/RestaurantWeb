import { Component, OnInit } from '@angular/core';
import {Category} from "../../../../models/Category";
import {HomeService} from "../../../../services/home-service";


@Component({
  selector: 'home-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private homeService : HomeService) { }

  categories : Category[] = []
  selectedCategory : string = ""

  ngOnInit(): void {
    this.GetCategories()
  }

  GetCategories (){
    this.homeService.GetCategories().subscribe(res => {
      if(res.isSuccess){
        this.categories = res.data;
        console.log(res.data)
      }
    })
  }

  Search(){
      
  }

}
