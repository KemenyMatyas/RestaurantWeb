import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isCollapsed = true;

  constructor(private router: Router) { }


  login(){
    this.router.navigateByUrl('/login')
    return true
  }
  register(){
    this.router.navigateByUrl('/register')
  }

  loggedIn(){
    return localStorage.getItem('jwt');
  }

  logout(){
    localStorage.removeItem('jwt');
    window.location.reload();
  }


  ngOnInit(): void {

  }


}
