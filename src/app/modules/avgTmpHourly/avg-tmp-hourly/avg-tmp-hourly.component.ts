import { Component, OnInit, OnChanges, Input } from '@angular/core';
import _ from 'lodash';
@Component({
  selector: 'app-avg-tmp-hourly',
  templateUrl: './avg-tmp-hourly.component.html',
  styleUrls: ['./avg-tmp-hourly.component.css']
})
export class AvgTmpHourlyComponent implements OnInit {
  @Input('data') data;
  avgtempData: any = {};
  originalData: any;

  constructor() { }

  ngOnInit() {
    this.avgHourlyTemp();
  }
  //Average Hourly Temp
  avgHourlyTemp() {
    let avgtemp = _.map(
      _.map(
        _.groupBy(
          _.map(this.data, p => {
            return {
              device_name: p.device_display_name,
              temp_reading: p.reading,
              timeinhrs: (new Date(p.time)).getHours()
            }
          }), 'timeinhrs'),
        v => _.groupBy(v, 'device_name')),
      b => _.map(b, a => {
        return {
          device_name: a[0].device_name,
          mean_reading: _.meanBy(a, p => p.temp_reading),
          timeinhrs: a[0].timeinhrs
        }
      }))

    this.avgtempData = avgtemp.map((val) => {
      return {
        timeinhrs: val[0].timeinhrs,
        deviceName: val.map((avg) => avg.device_name),
        meanReading: val.map((avg) => avg.mean_reading),
      }
    });
  }

  //Get a Single data
  getData(time) {
    let getdata: any = this.avgtempData.filter((item: any) => {
      if (item.timeinhrs == time) {
        return {
          deviceName: item.device_name,
          meanReading: item.mean_reading,
        }
      }
    })
    this.originalData = getdata[0];
  }

}
