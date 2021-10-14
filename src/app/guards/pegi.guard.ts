import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { StoreService } from '@app/db/delta/store.service';
import { i_State } from '@app/interfaces/state';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PegiGuard implements CanActivate {
  // confirm once
  pegiNum = 16;
  pegiDesc =
    'lenguaje soez. Puede contener malas palabras, sexualidad, amenazas y toda clase de insultos';

  // guard + redirect
  activated = false;
  redirectTo = '';

  constructor(public Store: StoreService, private router: Router) {}

  canActivate(): boolean {
    this.Store.state$.pipe(take(1)).subscribe((s: i_State) => {
      // 1. Confirm only once (bypassPegi undefined)
      if (s['bypassPegi'] === undefined) {
        const confirmAge = <boolean>(
          confirm(`Esta página contiene ${this.pegiDesc}.
        \nDebes tener ${this.pegiNum} años o más, para acceder a esta página
        \nConfirmas que tienes ${this.pegiNum} años o más?.
        \nSi no los tienes, serás redirigido a la página de Inicio`)
        );

        // define bypassPegi for session
        this.Store.dispatch('bypassPegi', confirmAge);

        // bypass guard
        this.activated = confirmAge;

        confirmAge
          ? console.log('acceso PEGI' + this.pegiNum + ' garantizado')
          : console.log('acceso PEGI' + this.pegiNum + ' concedido');
      }

      // 2.2.1. read state
      console.error(s['bypassPegi']);

      // 2.2.2. allow/deny access + redirect
      if (!this.activated) this.router.navigateByUrl(this.redirectTo);
    });

    return this.activated;
  }
}
