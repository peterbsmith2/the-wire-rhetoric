import { Component, OnInit, Input } from '@angular/core';
import { Scene } from '../../models/scene';

@Component({
  selector: 'wire-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements OnInit {
  @Input() scene: Scene;
  @Input() number: number;
  constructor() { }

  ngOnInit() {
  }

}
