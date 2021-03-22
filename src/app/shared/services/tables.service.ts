import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {Employee} from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class TablesService {
  public loadEmployeeTableData(): Observable<Employee[]> {
    return of([
      {name: 'Joe James', company: 'Example Inc.', city: 'Yonkers', state: 'NY'},
      {name: 'John Walsh', company: 'Example Inc.', city: 'Hartford', state: 'CT'},
      {name: 'Bob Herm', company: 'Example Inc.', city: 'Tampa', state: 'FL'},
      {name: 'James Houston', company: 'Example Inc.', city: 'Dallas', state: 'TX'}
    ]);
  }

}
