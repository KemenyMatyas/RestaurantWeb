import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Category} from "../../../../models/Category";
import {HomeService} from "../../../../services/home-service";
import {SearchData} from "../../../../models/SearchData";


@Component({
  selector: 'home-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private homeService : HomeService) { }

  @Output() searchEmit = new EventEmitter<SearchData>();

  searchWord = ""
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
    console.log(this.searchWord)
      this.searchEmit.emit({searchWord : this.searchWord, category: this.selectedCategory})
  }

}
