import {Component, OnInit, OnDestroy} from '@angular/core';
import {Topic} from "../storm-card/topic";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-storm-board',
  templateUrl: './storm-board.component.html',
  styleUrls: ['./storm-board.component.css']
})


export class StormBoardComponent implements OnInit, OnDestroy {
  topics: Topic[] = [
    {name: "test", entries: [JSON.parse('{"key": "key", "value": 1}'), JSON.parse('{"key": "key", "value": 2}')]},
    {name: "test", entries: [JSON.parse('{"key": "key", "value": 1}'), JSON.parse('{"key": "key", "value": 2}')]},
    {name: "test", entries: [JSON.parse('{"key": "key", "value": 1}'), JSON.parse('{"key": "key", "value": 2}')]},
    {name: "test", entries: [JSON.parse('{"key": "key", "value": 1}'), JSON.parse('{"key": "key", "value": 2}')]},
    {name: "test", entries: [JSON.parse('{"key": "key", "value": 1}'), JSON.parse('{"key": "key", "value": 2}')]},
    {name: "test", entries: [JSON.parse('{"key": "key", "value": 1}'), JSON.parse('{"key": "key", "value": 2}')]},
    {name: "test", entries: [JSON.parse('{"key": "key", "value": 1}'), JSON.parse('{"key": "key", "value": 2}')]}
  ];

  connection;

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.connection = this.messageService.getMessages().subscribe(message => {
      this.messageToTopic(message);
    })
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  messageToTopic(message) {
    let entries = JSON.parse(message.value);
    let jsonEntries = [];
    for (var i = 0; i < entries.length; i++) {
      let entry = entries[i];
      let key = entry.key;
      let value = entry.value || 0;
      if (key) {
        let jsonString = JSON.stringify(entry);
        let jsonEntry = JSON.parse(jsonString);
        jsonEntries.push(jsonEntry);
      }
    }
    if (jsonEntries.length > 0) {
      let topic: Topic = {name: message.topic, entries: jsonEntries};
      this.updateTopic(topic);
    }
  }

  updateTopic(topic) {
    let updated = false;
    for (var i = 0; i < this.topics.length; i++) {
      if (topic.name == this.topics[i].name) {
        this.topics[i] = topic;
        updated = true;
        break;
      }
    }
    if (!updated) {
      this.topics.push(topic)
    }

  }
}
