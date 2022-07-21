import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import {UserApiService} from "../../services/user-api-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private userService: UserApiService, private route: ActivatedRoute) { }
  routerURL!: string;


  ngOnInit(): void {
    this.routerURL = this.route.snapshot.queryParams['returnURL'] || '/'
  }

  loading = false;
  error = "";
  invalidLogin = false;

  login(form: NgForm) {
    const credentials = JSON.stringify(form.value);
    this.loading = true;
    this.userService.login(credentials).subscribe(response => {
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
    this.router.navigate(["register"]);
  }

}


