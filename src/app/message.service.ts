import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class MessageService {
  private url = 'http://localhost:3000';
  private socket;
  private io;

  constructor() {
    this.io = require('socket.io-client');
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket = this.io(this.url);
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }
}
