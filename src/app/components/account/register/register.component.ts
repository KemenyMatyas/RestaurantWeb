import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {UserApiService} from "../../../services/user-api-service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private userService: UserApiService) { }

  ngOnInit(): void {
  }
  invalidLogin = false;
  error = "";
  loading = false;


  register(form: NgForm) {
    const credentials = JSON.stringify(form.value);
    this.loading=true;
    this.userService.register(credentials).subscribe(response => {
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
