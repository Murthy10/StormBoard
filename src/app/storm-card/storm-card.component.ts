import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {Topic} from "./topic";

@Component({
  selector: 'app-storm-card',
  templateUrl: './storm-card.component.html',
  styleUrls: ['./storm-card.component.css']
})
export class StormCardComponent implements OnInit {

  @Input()
  topic: Topic;

  constructor() { }

  ngOnInit() {
  }

}
