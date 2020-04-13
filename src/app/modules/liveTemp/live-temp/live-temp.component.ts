import { Component, OnInit, Input } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-live-temp',
  templateUrl: './live-temp.component.html',
  styleUrls: ['./live-temp.component.css']
})
export class LiveTempComponent implements OnInit {
  @Input('data') pollData;
  counter: number = 0;
  interval: any;
  liveAvgTempData = [];
  constructor() { }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.avg();
    }, 10000)

  }

// Avg Live temp
  avg() {
    this.counter = this.counter + 100  
    if (this.counter < this.pollData.length) {
      this.liveAvgTempData = _.map(_.groupBy(this.pollData.slice(0, this.counter), 'device_display_name'), v => { return { device_name: v[0].device_display_name, mean_reading: _.meanBy(v, p => p.reading) } })
    } else if (this.counter > this.pollData.length) {
      alert('Threshold crossed');
    }
  }

//when Destroy the component
  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }
}
