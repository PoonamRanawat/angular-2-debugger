import {Injectable, EventEmitter} from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class DataService {
  pushedData = new EventEmitter<string>();
  private data: string[] = [];

  constructor(private logService: LogService) {}

  addData(input: string) {
    this.data.push(input);
    this.logService.writeToLog('Saved Item:' + input);
  }
  getData() {
    return this.data;
  }
  pushData(value: string) {
   return this.pushedData.emit(value);
  }
}
