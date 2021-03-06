import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate  {

  constructor(private route: Router) {

  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let id = +next.url[1].path;
    if(isNaN(id) || id < 1) {
      alert('Invalid Product Id');
      this.route.navigate(['/products']);
      return false; 
    }
    return true;
  }
  
}
