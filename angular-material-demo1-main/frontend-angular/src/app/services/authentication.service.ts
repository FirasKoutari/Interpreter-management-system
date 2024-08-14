import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public username : any;
  public roles : string[] = [];
  public authenticated : boolean =false;
  public users:any = {
    admin : ['ADMIN'],
    user1 : ['MANAGER']
  }
  constructor(private router : Router) { }

  public login(username : string, password : string){
    if(this.users[username] && password==""){
      this.username = username;
      this.roles = this.users[username];
      this.authenticated = true;
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.authenticated=false;
    this.username = undefined;
    this.roles = [];
    this.router.navigateByUrl("/login");
  }

  public isAuthenticated(): boolean {
    return this.authenticated;
  }

  public getUsername(): string | undefined {
    return this.username;
  }

  public getRoles(): string[] {
    return this.roles;
  }
}
