import { Injectable } from '@angular/core';
import { EPISODES } from '../constants/episodes';
import { Episode } from '../models/episode';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class EpisodeService {

  constructor() { }

  getAll(): Observable<Episode[]> {
    return of(EPISODES);
  }

  getByIndex(i: number): Observable<Episode> {
    return of(EPISODES[i]);
  }

}
