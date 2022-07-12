// drivers.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/@graphql/services/api.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  drivers: any;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getSelectYearDrivers({
      year: '2019'
    }).subscribe((value) => this.drivers = value);
  }
}
