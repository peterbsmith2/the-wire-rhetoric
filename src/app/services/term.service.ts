import { Injectable } from '@angular/core';
import { TERMS } from '../constants/terms';
import { Terms, Term } from '../models/term';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TermService {

  constructor() { }

  getAll(): Observable<Terms> {
    return of(TERMS);
  }

  getByKey(key: string): Observable<Term> {
    return of(TERMS[key]);
  }

}
