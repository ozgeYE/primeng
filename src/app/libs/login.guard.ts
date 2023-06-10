import {  CanActivate,  ActivatedRouteSnapshot,  RouterStateSnapshot,  Router} from "@angular/router";
import { Injectable } from "@angular/core";
import {LocalStorageService} from "../services/local-storage.service";

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private localStorageService: LocalStorageService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isSignIn = this.localStorageService.getItem('email');
    if (isSignIn) {
      return true;
    }
    this.router.navigate(["login"]);
    return false;
  }
}
