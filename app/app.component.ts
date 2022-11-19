import { Component } from '@angular/core';
import { mockData1, mockData2, mockData3 } from './weather-data';

@Component({
    selector: 'my-app',
    template: `
      <kendo-chart>
        <kendo-chart-series>
          <!-- Serie 1 -->
          <kendo-chart-title text="Daily Max (&deg;C)"></kendo-chart-title>
          <kendo-chart-series-item 
            type="line" 
            [data]="data1"
            [markers]="{ visible: false }"
            field="TMax" 
            categoryField="Date"
          >
          </kendo-chart-series-item>
          <!-- Serie 2  -->
          <kendo-chart-title text="Daily Max (&deg;C)"></kendo-chart-title>
          <kendo-chart-series-item 
            type="line" 
            [data]="data2"
            [markers]="{ visible: false }"
            field="TMax" 
            categoryField="Date"
          >
          </kendo-chart-series-item>
          <!-- Serie 3  -->
          <kendo-chart-title text="Daily Max (&deg;C)"></kendo-chart-title>
          <kendo-chart-series-item 
            type="line" 
            [data]="data3"
            [markers]="{ visible: false }"
            field="TMax" 
            categoryField="Date"
          >
          </kendo-chart-series-item>
        </kendo-chart-series>
      </kendo-chart>
    `
})
export class AppComponent {
    public data1: any[] = mockData1();
    public data2: any[] = mockData2();
    public data3: any[] = mockData3();


}
