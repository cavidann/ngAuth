import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate() {
    let user = this.authService.currentUser;
    if (user && user.admin) {
      return true;
    }

    this.router.navigate(['/no-access']);
    return false;
  }
}
