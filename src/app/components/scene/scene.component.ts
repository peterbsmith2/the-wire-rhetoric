import { Component, OnInit, Input } from '@angular/core';
import { Scene } from '../../models/scene';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'wire-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements OnInit {
  @Input() scene: Scene;
  @Input() number: number;
  public options = {
    query: {
      rel: 0,
      controls: 0,
      showinfo: 0,
    },
    attr: {
      frameborder: '0',
      width: 535,
      height: 400
    }
  };

  constructor(
    public embed: EmbedVideoService
  ) { }

  ngOnInit() {
  }

}
