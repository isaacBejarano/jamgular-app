import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { i_Idioms } from '@app/interfaces/env';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private API: string = environment.API;
  private endpoints: i_Idioms = environment.endpoints;

  constructor(private XHR: HttpClient) {}

  getCollection(collection: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json, text/plain, */*')

    return this.XHR.get(this.API + this.endpoints[collection], {
      headers: headers,
      // responseType: 'json',
    }).pipe(map((res: any) => res));
  }
}

// TODO:
// NTL plugins (deplo hours, inline CSS, inline Source, Inline env vars, is web vulnerable, sitemap)
// SPA Routes
// Game
// Colors modernos
// Analytics
// Promocionalo por whatss, etc, pero que no salga tu nombre