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
  // acceptRedirect = false;
  redirectTo = '';

  constructor(public Store: StoreService, private router: Router) {}

  canActivate(): boolean {
    // 1. Confirm only once
    this.Store.state$.subscribe((s: i_State) => {
      console.warn(s['bypassPegi']);

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
        // this.acceptRedirect = !confirmAge;

        // bypass guard
        this.activated = confirmAge;
      }

      
      // 2.2.1. read state
      this.activated = s['bypassPegi'];
    });
    
    // 2.2.2. allow/deny access + redirect
    if (!this.activated) this.router.navigateByUrl(this.redirectTo);

    return this.activated;
  }
}
