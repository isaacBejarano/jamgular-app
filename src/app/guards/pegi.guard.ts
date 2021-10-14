import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { StoreService } from '@app/db/delta/store.service';
import { i_State } from '@app/interfaces/state';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PegiGuard implements CanActivate {
  activated = false; // guard.def
  pegiNum = 16;
  pegiDesc =
    'lenguaje soez. Puede contener malas palabras, sexualidad, amenazas y toda clase de insultos';
  acceptRedirect = false;
  redirectTo = '';

  constructor(public Store: StoreService, private router: Router) {}

  canActivate(): boolean {
    // 1. Confirm only once
    this.Store.state$.pipe(take(1)).subscribe((s: i_State) => {

      // bypassPegi undefined
      if (s['bypassPegi'] === undefined) {
        // confirm Age
        const msg = `Esta página contiene ${this.pegiDesc}.
          \nDebes tener ${this.pegiNum} años o más, para acceder a esta página
          \nConfirmas que tienes ${this.pegiNum} años o más?.
          \nSi no los tienes, serás redirigido a la página de Inicio`;

        const confirmAge = <boolean>confirm(msg);

        // define bypassPegi for session
        this.Store.dispatch('bypassPegi', confirmAge);

        // accept redirect
        this.acceptRedirect = !confirmAge;

        // bypass guard
        this.activated = confirmAge
      }
    });

    // 2.a. redirect if denied
    if (this.acceptRedirect) this.router.navigateByUrl(this.redirectTo);

    // 2.b. allow/deny access
    return this.activated;
  }
}
