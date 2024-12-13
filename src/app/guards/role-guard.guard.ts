import { CanActivateFn, Router } from "@angular/router";
import { AuthenticationServiceService } from "../shared/services/authentication-service.service";
import { inject } from "@angular/core";

export const roleGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationServiceService);
  const router = inject(Router);

  const userType = authService.checkUserType();
  console.log('User Type:', userType);

  if (userType === '2') {
    return true;

  } else if (userType === '1') {
    router.navigate(['/home/admin-data']);
    return false;

  } else {
    router.navigate(['/login']);
    return false;
  }
};
