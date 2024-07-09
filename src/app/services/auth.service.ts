import { inject, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService   {
  // private router = inject(Router)

  isAuthenticated = new BehaviorSubject(false)

  login(msg:string){
    if(msg === 'Success'){
      localStorage.setItem('token', 'qwerty123')
      this.isAuthenticated.next(true)
      //  this.router.navigate(['browse'])
    }
  }

  get isLogged(){
    if(localStorage.getItem('token')){
      return true
    }
    return false
  }






}
