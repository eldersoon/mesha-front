import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor() {}

  login(credentials: any) {
    return new Promise((resolve) => {
      window.localStorage.setItem('token', 'jwt_here');
      resolve(true);
    });
  }
}
