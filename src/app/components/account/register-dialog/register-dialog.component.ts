import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {UserApiService} from "../../../services/user-api-service";
import {MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-register',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RegisterDialogComponent>,private http: HttpClient, private router: Router, private userService: UserApiService) { }

  ngOnInit(): void {
  }
  invalidLogin = false;
  error = "";
  loading = false;


  onNoClick(): void {
    this.dialogRef.close();
  }

  register(form: NgForm) {
    const credentials = JSON.stringify(form.value);
    this.loading=true;
    this.userService.Register(credentials).subscribe(response => {
      if (response.isSuccess) {
        this.invalidLogin = false;
        this.loading=false;
        this.error="";
        this.router.navigate(["/login"]);
      }else {
        this.invalidLogin = true;
        this.loading=false;
        this.error= response.errors[0];
      }
    },() => {
      this.invalidLogin=true;
      this.loading = false;
      this.error="Server hiba"
    })
  };

}
