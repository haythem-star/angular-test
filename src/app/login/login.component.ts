import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  password="";
  email="";
  error: string = null;
   constructor(public authService : AuthService ,private dialog: MatDialog) { }
 
   ngOnInit(): void {
   }
 
   login(form : NgForm) {
     const email = form.value.email;
     const password = form.value.password;
     
 this.authService.login(email, password);
   
 form.reset();
 
 
 }
 
 
 
 
  

}
