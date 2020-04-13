import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';
import { EchartsComponent } from './modules/echarts/echarts/echarts.component';

import { HttpClientModule } from '@angular/common/http';
import { NgxEchartsModule } from 'ngx-echarts';
import { AvgTmpHourlyComponent } from './modules/avgTmpHourly/avg-tmp-hourly/avg-tmp-hourly.component';
import { DeviceTableComponent } from './modules/deviceTable/device-table/device-table.component';
import { AvgTempComponent } from './modules/avgTemp/avg-temp/avg-temp.component';
import { LiveTempComponent } from './modules/liveTemp/live-temp/live-temp.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    EchartsComponent,
    AvgTmpHourlyComponent,
    DeviceTableComponent,
    AvgTempComponent,
    LiveTempComponent,
    
  ],
  imports: [
    BrowserModule,
    NgxEchartsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
