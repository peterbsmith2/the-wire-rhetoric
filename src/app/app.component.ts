import { Component } from '@angular/core';
import { EpisodeService } from './services/episode.service';
import { Observable } from 'rxjs/Observable';
import { Episode } from './models/episode';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { TermService } from './services/term.service';
import { Term } from './models/term';
import { switchMap, filter, map } from 'rxjs/operators';

@Component({
  selector: 'wire-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  episodes$: Observable<Episode[]>;
  term$: Observable<Term>;

  constructor(
    private episodes: EpisodeService,
    private terms: TermService,
    private router: Router,
  ) {
    this.episodes$ = episodes.getAll();
    this.term$ = router.events.pipe(
      filter(event => event instanceof RoutesRecognized),
      map((event: RoutesRecognized) => event.url.substr(2)),
      switchMap(term => terms.getByKey(term)),
    );
  }
}
