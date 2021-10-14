import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PegiGuard implements CanActivate {
  // confirm once
  pegiNum = 16;
  pegiTitle = 'lenguaje soez';
  pegiDesc = `${this.pegiTitle.toUpperCase()}. Puede contener malas palabras, sexualidad, amenazas y toda clase de insultos`;

  // guard + redirect
  bypassPegi!: boolean;
  redirectTo = '';

  constructor(private router: Router) {}

  canActivate(): boolean {
    // 1. define [bypassPegi] / confirm only once
    if (this.bypassPegi === undefined) {
      const confirmAge = <boolean>confirm(`PEGI ${this.pegiNum}.
        \nEsta página contiene ${this.pegiDesc}. Debes tener ${this.pegiNum} años o más, para acceder a esta página.
        \n"Acepta" si tienes ${this.pegiNum} años o más.\n"Cancela" si no los tienes (serás redirigido/a a la página de Inicio).`);

      // bypass guard
      this.bypassPegi = confirmAge;

      confirmAge
        ? console.log('acceso PEGI-' + this.pegiNum + ' concedido')
        : console.log('acceso PEGI-' + this.pegiNum + ' denegado');
    }

    // 2. read bypassPegi + redirect
    if (!this.bypassPegi) this.router.navigateByUrl(this.redirectTo);

    return this.bypassPegi;
  }
}
