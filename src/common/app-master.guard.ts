import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppMasterGuard implements CanActivate {
  menuItem: any;
  constructor(private router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const user = localStorage.getItem('isLoggedin');
    if (user) {
      return true;
    } else {
      if (!user) {
        this.router.navigate(['admin/login']);
        return false;
      }
      return true;
    }
  }
}
