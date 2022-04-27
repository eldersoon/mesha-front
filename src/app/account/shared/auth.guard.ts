import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private accountService: AccountService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = window.localStorage.getItem('token');
    console.log(token);
    if (this.accountService.isUserLoggedIn()) {
      console.log('ok');
      return true;
    } else {
      console.log('expirou');
      this.router.navigate(['login']);
      return false;
    }
  }
}
