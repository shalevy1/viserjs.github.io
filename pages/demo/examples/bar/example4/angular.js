export const template =
`import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

const data = [
  { country: 'Europe', year: '1750', value: 163 },
  { country: 'Europe', year: '1800', value: 203 },
  { country: 'Europe', year: '1850', value: 276 },
  { country: 'Europe', year: '1900', value: 408 },
  { country: 'Europe', year: '1950', value: 547 },
  { country: 'Europe', year: '1999', value: 729 },
  { country: 'Europe', year: '2050', value: 628 },
  { country: 'Europe', year: '2100', value: 828 },
  { country: 'Asia', year: '1750', value: 502 },
  { country: 'Asia', year: '1800', value: 635 },
  { country: 'Asia', year: '1850', value: 809 },
  { country: 'Asia', year: '1900', value: 947 },
  { country: 'Asia', year: '1950', value: 1402 },
  { country: 'Asia', year: '1999', value: 3634 },
  { country: 'Asia', year: '2050', value: 5268 },
  { country: 'Asia', year: '2100', value: 7268 }
];

const dataPre = {
  transform: {
    type: 'percent',
    field: 'value',
    dimension: 'country',
    groupBy: ['year'],
    as: 'percent'
  }
};

const scale = [{
  dataKey: 'percent',
  min: 0,
  formatter: '.2%',
}];

@Component({
  selector: '#mount',
  template: \`
  <div>
    <Chart [forceFit]="forceFit" [height]="height" [data]="data" [dataPre]="dataPre" [scale]="scale">
      <Tooltip></Tooltip>
      <Axis></Axis>
      <Legend></Legend>
      <StackBar position="year*percent" color="country" [ngStyle]="{ stroke: '#fff', lineWidth: 1 }"></StackBar>
    </Chart>
  </div>
  \`
})

class AppComponent {
  forceFit: boolean= true;
  height: number = 400;
  data = data;
  dataPre = dataPre;
  scale = scale;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ViserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
`;
