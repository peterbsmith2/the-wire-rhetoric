import { Component, OnInit, Input } from '@angular/core';
import { Episode } from '../../models/episode';

@Component({
  selector: 'wire-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  @Input() episode: Episode;
  constructor() { }

  ngOnInit() {
  }

}
