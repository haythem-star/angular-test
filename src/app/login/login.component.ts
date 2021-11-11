import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  
   form: FormGroup;
   public loginInvalid = false;
   
   constructor(
     private fb: FormBuilder,private router : Router,private authService :AuthService) {
     
     this.form = this.fb.group({
       username: ['', Validators.email],
       password: ['', [Validators.required, Validators.minLength(6)]]


     });

   }
 
   ngOnInit() {
     
   }
 
  onSubmit(){
     this.loginInvalid = false;
     if (this.form.valid) {
       try {
         const username = this.form.get('username')?.value;
         const password = this.form.get('password')?.value;
         if(this.authService.isUser(username)){  // i use only the username to verify costumers.
          this.authService.setAuth(true);
          this.router.navigate(['/filter']);
         }else{
          this.loginInvalid = true;
         }
       } catch (err) {
         this.loginInvalid = true;
       }
     } 
   }

}
