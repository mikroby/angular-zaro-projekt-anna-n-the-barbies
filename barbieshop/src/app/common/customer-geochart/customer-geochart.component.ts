import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { DateService } from 'src/app/service/date.service';

@Component({
  selector: 'app-customer-geochart',
  templateUrl: './customer-geochart.component.html',
  styleUrls: ['./customer-geochart.component.scss']
})
export class CustomerGeochartComponent implements OnInit {

  timeNumber!: number
  timeFormat!: string

  countries_data = [['Country', 'Customer Number']]
  array: string[] = []
  countriesNames: string[] = []
  countriesNumbers: number[] = []

  @ViewChild('mychart', {static: false}) mychart: any;

  constructor(
    private customerService: CustomerService,
    private dateService: DateService
  ) { }

  ngOnInit(): void {
    this.updateGeoChart()
    this.timeNumber = this.dateService.editUpdateTimeNumber('customer')
    this.timeFormat = this.dateService.editUpdateTimeFormat('customer')
    this.mychart.draw()
    setInterval(() => this.updateTime(), 1000*60)
    }

    updateTime() {
    this.timeNumber = this.dateService.editUpdateTimeNumber('customer')
    this.timeFormat = this.dateService.editUpdateTimeFormat('customer')
    }

    updateGeoChart() {
      this.customerService.getAll().subscribe(
        (values: Customer[]) => {
          for (let v of values) {
            this.array.push(v.address.country)}
            this.countriesNames = [...new Set(this.array.filter(item => item != ''))]
            for (let country of this.countriesNames)  {
              let x = this.array.filter(item => item === country).length
              let temp = [country, x]
              this.countries_data.push(temp as string[]);
            }
      })
    }

    public geoChart: GoogleChartInterface = {
      chartType: GoogleChartType.GeoChart,
      dataTable: this.countries_data,
      options: {
        colorAxis: {colors: ['#ffc107', '#fd7e14', '#dc3545']},
        backgroundColor: '#9cf',
        datalessRegionColor: '#f8f9fa',
        defaultColor: '#6c757d',
      }
    };


}
