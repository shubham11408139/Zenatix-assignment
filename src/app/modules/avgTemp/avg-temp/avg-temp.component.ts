import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avg-temp',
  templateUrl: './avg-temp.component.html',
  styleUrls: ['./avg-temp.component.css']
})
export class AvgTempComponent implements OnInit {
@Input('data') avgTemp;

  constructor() { }

  ngOnInit() {

  }

}
