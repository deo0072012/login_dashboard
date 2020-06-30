import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
   username:string;
   password:string;

  constructor(public router: Router) { }

  ngOnInit() {
  }
  loginuser()
  {
    if(this.username=="admin" && this.password=="admin123")
    {
      console.log("welcome");
      sessionStorage.setItem('key','admin'); 
      this.router.navigate(['/dashboard/default']);
      
    }
  }

}
