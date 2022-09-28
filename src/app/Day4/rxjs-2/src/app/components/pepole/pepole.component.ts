import { Component, OnInit } from '@angular/core';
import { combineLatest, debounceTime, filter, map, Observable, startWith, Subject } from 'rxjs';

import { Customer } from 'src/app/models/customer.model';
import { CustomersService } from 'src/app/services/people.service';

@Component({
  selector: 'app-pepole',
  templateUrl: './pepole.component.html',
  styleUrls: ['./pepole.component.scss']
})
export class PepoleComponent implements OnInit {

  inputChanged = new Subject<string>();

  onlyInProgressItems$: Observable<Customer[]>;
  customers$: Observable<Customer[]>;
  count$: Observable<number>;

  showInProgresCustomers = false;
  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
    const searchValueChanged$ = this.inputChanged.pipe(
      filter(x => x.length > 2),
      debounceTime(300), map(x => x.toLowerCase()));

    const customersFromServer$ = this.customersService.customers$;

    this.customers$ = combineLatest([searchValueChanged$.pipe(startWith('')), customersFromServer$])
      .pipe(map(([lastValueFromSearch, lastCustomersListFromServer]) =>
        lastCustomersListFromServer.filter(x => x.name.toLowerCase().includes(lastValueFromSearch))));

    this.count$ = this.customersService.inProgressCustomersCount$;
    this.onlyInProgressItems$ = this.customersService.inProgressCustomers$;
  }

  removecustomer(c: Customer) {
    this.customersService.removeCustomer(c.id);
  }

}
