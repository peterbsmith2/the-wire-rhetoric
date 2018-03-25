import { Component } from '@angular/core';
import { EpisodeService } from './services/episode.service';
import { Observable } from 'rxjs/Observable';
import { Episode } from './models/episode';

@Component({
  selector: 'wire-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  episodes$: Observable<Episode[]>;

  constructor(
    episodes: EpisodeService
  ) {
    this.episodes$ = episodes.getAll();
  }
}
