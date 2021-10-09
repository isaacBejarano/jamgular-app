import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SlugOperatorService {
  private slug = '';

  // constructor(@Inject('slug') private slug: string) {}

  // First optional OP
  translate() {
    // relevance DESC order for RAM efficciency
    const ENG = ['populars', 'slangs', 'months'];
    const SPA = ['populares', 'vulgares', 'de-temporada'];
    // ...MEX, etc.

    if (this.slug === ENG[0]) this.slug = SPA[0];
    else if (this.slug === ENG[1]) this.slug = SPA[0];
    else if (this.slug === ENG[2]) this.slug = SPA[0];

    // pipe
    return this;
  }

  // Dependant OPs
  unslash() {
    this.slug = this.slug.replace(/\//, ''); // only the first

    // pipe
    return this;
  }

  undash() {
    this.slug = this.slug.replace(/[-_]/g, ' '); // all. lodash too

    // pipe
    return this;
  }

  // setters
  set setSlug(str: string) {
    this.slug = str;
  }

  // getters
  get getSlug(): string {
    return this.slug;
  }
}
