import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {UserApiService} from "../../../services/user-api-service";
import {RegisterDialogComponent} from "../register-dialog/register-dialog.component";

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<LoginDialogComponent>, private router: Router, private http: HttpClient,private userService: UserApiService, private route: ActivatedRoute) {}
  routerURL!: string;
  loading = false;
  error = "";
  invalidLogin = false;

  ngOnInit(): void {
    this.routerURL = this.route.snapshot.queryParams['returnURL'] || '/'
  }

  onNoClick(): void {
    this.dialogRef.close();
  }



  login(form: NgForm) {
    const credentials = JSON.stringify(form.value);
    this.loading = true;
    this.userService.Login(credentials).subscribe(response => {
      if(response.isSuccess){
        localStorage.setItem("jwt", response.data);
        this.invalidLogin=false;
        this.loading = false;
        this.error="";
        this.router.navigate([this.routerURL]);
      }else {
        this.invalidLogin=true;
        this.loading = false;
        this.error = response.errors[0];
      }
    },() => {
      this.invalidLogin=true;
      this.loading = false;
      this.error="Server hiba"
    })
  };

  register(){
    this.dialog.open(RegisterDialogComponent, {
      width: '700px',
      height: '600px'
    });
  }
}
