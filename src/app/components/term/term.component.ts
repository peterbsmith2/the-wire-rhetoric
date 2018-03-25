import { Component, OnInit, Input } from '@angular/core';
import { Term } from '../../models/term';

@Component({
  selector: 'wire-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.css']
})
export class TermComponent implements OnInit {
  @Input() term: Term;

  constructor() { }

  ngOnInit() {
  }

}
