import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MenuItem} from "../../../../models/MenuItem";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'home-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  constructor() { }

  @Output() pageChangeEmit = new EventEmitter<PageEvent>();

  @Input() menuItems: MenuItem[] | undefined
  @Input() count : number = 0

  ngOnInit(): void {
  }

  OnPageChange(event: PageEvent){
    this.pageChangeEmit.emit(event)
  }
}
