import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {LoginDialogComponent} from "../account/login-dialog/login-dialog.component";
import {RegisterDialogComponent} from "../account/register-dialog/register-dialog.component";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isCollapsed = true;

  constructor(private router: Router, public dialog: MatDialog) { }


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


  OpenLoginDialog(): void {
    this.dialog.open(LoginDialogComponent, {
      width: '700px',
      height: '600px'
    });
  }

  OpenRegisterDialog(): void {
    this.dialog.open(RegisterDialogComponent, {
      width: '700px',
      height: '600px'
    });
  }

  ngOnInit(): void {

  }


}
