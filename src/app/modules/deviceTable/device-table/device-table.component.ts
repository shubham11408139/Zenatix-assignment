import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-device-table',
  templateUrl: './device-table.component.html',
  styleUrls: ['./device-table.component.css']
})
export class DeviceTableComponent implements OnInit {
@Input('data') deviceTableData;
  constructor() { }

  ngOnInit() {
    
  }

}
