import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import _ from 'lodash';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data = [];
  type:string = '';
  device:string = '';
  uniqueDeviceType = [];
  uniqueDeviceName = [];
  deviceTable = [];
  newdata = [];
  avgTemp = [];
  constructor(private _common: CommonService) { }

  ngOnInit() {
    this.setTypeDevice();
  }

//Set types name 
  setTypeDevice(){
    this._common.getSampleJson().subscribe((res)=>{
     this.data = res.data;
     let filtereddata = this.data;
      this.newdata =_.sortBy(filtereddata, dtime => { return new Date(dtime.time) })
     this.uniqueDeviceType =  _.uniq(_.map(res.data, 'device_type'));
     this.uniqueDeviceName = _.uniq(_.map(res.data,'device_display_name' ));
     this.deviceTable = _.uniqBy(this.data, v => [v.device_display_name, v.device_type].join())
     this.avgTemp = _.map(_.groupBy(this.data, 'device_display_name'), v => { return { device_name: v[0].device_display_name, mean_reading: _.meanBy(v, p => p.reading) } })
    })
  }

//When device type will change
  onTypeChange(event) {
    // console.log("Empty string;",event.target.value)
    this.type = event.target.value;
    this.device = '';
    if(event.target.value !=''){
      let filteredData =  _.filter(this.data, ['device_type', event.target.value])  
      this.uniqueDeviceName = _.uniq(_.map(filteredData,'device_display_name' ));
      this.newdata = _.sortBy(filteredData, dtime => { return new Date(dtime.time) })
    }else{
      this.setTypeDevice();
    }
   
}

//When device Will Chnage
onDeviceChange(event) {
  this.device = event.target.value;
  if (this.type !== '' && event.target.value !== ''){
    let filteredData =  _.filter(this.data, { 'device_type': this.type, 'device_display_name': event.target.value })
    this.newdata = _.sortBy(filteredData, dtime => { return new Date(dtime.time) })
  }
  else if (event.target.value != '') {
    let filteredData = _.filter(this.data, ['device_display_name', event.target.value])
    this.newdata = _.sortBy(filteredData, dtime => { return new Date(dtime.time) })
      this.type = '';
  }
  else if (this.type !== ''){
      let filteredData = _.filter(this.data, ['device_type', this.type])
    this.newdata = _.sortBy(filteredData, dtime => { return new Date(dtime.time) })
  }
  else {
    this.setTypeDevice();
      this.type = '';
  }
}

}
