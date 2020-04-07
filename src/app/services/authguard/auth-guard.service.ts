import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService) { }

  canActivate() {
    if (!this.authService.isLoggedInEmail) {
      this.authService.logout();
      return false;
    }
    return true;
  }
}
