import { CanActivateFn, Router } from "@angular/router";
import { AuthenticationServiceService } from "../shared/services/authentication-service.service";
import { inject } from "@angular/core";

export const AuthGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthenticationServiceService);
    const router = inject(Router);
  
    const isAuthenticated = authService.isAuthenticated();
    console.log(authService.isAuthenticated())
    if (isAuthenticated) {
      return true;
    } else {
      router.navigate(['/login']);
      return false;
    }
  };
