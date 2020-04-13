import { Component, OnInit, Input, OnChanges, AfterViewInit } from '@angular/core';
import { EChartOption } from 'echarts';
import _ from 'lodash';


@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.css']
})
export class EchartsComponent implements OnInit, OnChanges {
  @Input('data') data;
  filterData: any;

  chartOption: EChartOption;

  ngOnInit() {

  }

  ngOnChanges() {
    this.filterData = {
      sampledata: _.map(_.groupBy(this.data, 'device_display_name'), v => { return { device_name: v[0].device_display_name, temp_readings: _.map(v, p => p.reading), time_readings: _.map(v, p => (new Date(p.time)).toLocaleTimeString()) } }),
      udevices: _.uniq(_.map(this.data, 'device_display_name')),
      ureadings : _.sortBy(_.uniq(_.map(this.data, 'reading'))),
      utimes: _.uniq(_.map(this.data, v => { return (new Date(v.time)).toLocaleTimeString() })),
    }
    const merged = _.map(this.filterData.sampledata,v=>{return {name:v.device_name,data:this.out(v),type: 'line'}});

    this.chartOption = {
      title: {
        text: ''
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: this.filterData.udevices
      },
      toolbox: {
        feature: {
            saveAsImage: {
                title: 'Save As Image'
            }
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap:false,
        data: this.filterData.utimes
      },
      yAxis: {
        type: 'value',
        data: this.filterData.ureadings,
        min:21,
        max:28
      },
      dataZoom: [
        {
            type: 'slider',
            show: true,
            backgroundColor : 'rgba(47,69,84,0)',
            start: 97,
            end: 100,
            handleSize: 8
        },
        {
            type: 'inside',
            start: 97,
            end: 100
        },
        {
            type: 'slider',
            show: true,
            yAxisIndex: 0,
            filterMode: 'empty',
            // width: 12,
            // height: '70%',
            handleSize: 8,
            // showDataShadow: false,
            left: '93%'
        }
    ],
      series: merged
    }
  }

 
  out(v) { 
    let a = [];
    _.forEach(v.temp_readings, (t, i) => { a.push([v.time_readings[i], t]) });
    // console.log("a is:",a)
      return a 
    };
}
