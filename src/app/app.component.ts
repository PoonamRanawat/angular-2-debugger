import { Component , OnInit} from '@angular/core';

import { LogService } from './log.service';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ DataService]
})
export class AppComponent implements OnInit{
  value = '';
  items: string[] = [];

  constructor(private logService: LogService, private dataService: DataService) {

  }

  onLog(value: string) {
    this.logService.writeToLog(value);
  }
  onStore(value: string) {
    this.dataService.addData(value);
  }
  onGet() {
    this.items = this.dataService.getData();
  }
  onSend(value: string) {
    this.dataService.pushData(value);
  }

  ngOnInit() {
    this.dataService.pushedData.subscribe(
      data => this.value = data
    );
  }

}
