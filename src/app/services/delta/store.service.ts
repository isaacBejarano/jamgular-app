import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { i_State } from '@app/interfaces/state';
import { i_Idiom } from '@app/interfaces/express-api';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private readonly subj = new BehaviorSubject(<i_State>{});
  readonly state$: Observable<object> = this.subj.asObservable();

  dispatch(action: string, payload: i_Idiom[]) {
    let newState: i_State = {};

    // clone state
    this.state$.subscribe((s) => (newState = JSON.parse(JSON.stringify(s))));

    // relevance DESC order for RAM efficciency
    if (action === 'setPopulars') newState['populares'] = payload;
    else if (action === 'setSlangs') newState['vulgares'] = payload;
    else if (action === 'setMonths') newState['de-temporada'] = payload;
    // ...

    // NOTE: use slugs syntxa ('a-b-c') for rhe state object
    // That will make it easier to use slugs for triggering view renders
    this.subj.next(newState);
  }
}
