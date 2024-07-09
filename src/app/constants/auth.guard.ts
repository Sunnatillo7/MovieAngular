import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

export const IsAuthedGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const authService = inject(AuthService)
    const router = inject(Router)

   if(!authService.isLogged){
    return router.createUrlTree(['login'])
   }else{
    return true
   }
}
export const LogoutGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ) => {
        const authService = inject(AuthService)
        const router = inject(Router)

       if(authService.isLogged){
          return router.createUrlTree(['browse'])
       }
       else{
        return true
       }
}


