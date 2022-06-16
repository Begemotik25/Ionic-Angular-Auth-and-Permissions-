import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Roles } from '../admin/admin.page';
import { DataGetterService } from '../service/data-getter.service';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'user-token';

export interface User {
  id: number;
  name: Roles;
  permission: string[];
}

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private dataGetter: DataGetterService, private router: Router) {}

  private currentUser: BehaviorSubject<any> = new BehaviorSubject(null);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isLoggenIn = this.dataGetter.getUser() !== '';
    if (!isLoggenIn) {
      this.router.navigateByUrl('/login');
    }
    return isLoggenIn;
  }
}
