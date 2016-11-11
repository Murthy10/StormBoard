import {Component, OnInit} from '@angular/core';
import {Topic} from "../storm-card/topic";

@Component({
  selector: 'app-storm-board',
  templateUrl: './storm-board.component.html',
  styleUrls: ['./storm-board.component.css']
})


export class StormBoardComponent implements OnInit {
  topics: Topic[] = [
    {name: "test", entries: [JSON.parse('{"key": "key", "value": 1}'), JSON.parse('{"key": "key", "value": 2}')]},
    {name: "test", entries: [JSON.parse('{"key": "key", "value": 1}'), JSON.parse('{"key": "key", "value": 2}')]},
    {name: "test", entries: [JSON.parse('{"key": "key", "value": 1}'), JSON.parse('{"key": "key", "value": 2}')]},
    {name: "test", entries: [JSON.parse('{"key": "key", "value": 1}'), JSON.parse('{"key": "key", "value": 2}')]},
    {name: "test", entries: [JSON.parse('{"key": "key", "value": 1}'), JSON.parse('{"key": "key", "value": 2}')]},
    {name: "test", entries: [JSON.parse('{"key": "key", "value": 1}'), JSON.parse('{"key": "key", "value": 2}')]},
    {name: "test", entries: [JSON.parse('{"key": "key", "value": 1}'), JSON.parse('{"key": "key", "value": 2}')]}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
