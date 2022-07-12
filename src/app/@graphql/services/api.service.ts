import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DRIVER_YEAR } from './../operations/query';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apollo: Apollo) { }

  private getQuery(query: any, variables: any) {
    return this.apollo.watchQuery({
      query,
      variables,
      fetchPolicy: 'network-only'
    });
  }

  getSelectYearDrivers(variables: any = {
    year: '2019'
  }) {
    return this.getQuery(DRIVER_YEAR, variables).valueChanges.pipe(map((result: any) => {
      return result.data.driversYear;
    }));
  }
}
