import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable( { providedIn: 'root' })
export class AuthService {
    customer = ["nebojsha@gmail.com","svein@gmail.com","taha@gmail.com","steven@gmail.com","mario@gmail.com"]

    authBadge :Observable<boolean> | Promise<boolean> | boolean =false;
   
getAuth(){
return this.authBadge;
}
setAuth(authBadge :Observable<boolean> | Promise<boolean> | boolean){
    this.authBadge=authBadge;
}

isUser (email:string ):boolean{
if(this.customer.indexOf(email) == -1){
    return false;
}
return true;
}

}