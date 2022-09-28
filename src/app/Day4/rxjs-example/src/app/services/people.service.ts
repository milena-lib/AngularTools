import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private isBusy = new BehaviorSubject<boolean>(false);

  private listChanged = new BehaviorSubject<Customer[]>([]);
  readonly customers$ = this.listChanged.asObservable(); // downgrade
  readonly inProgressCustomers$ = this.customers$.pipe(map(list => list.filter(customer => customer.status === 'InProgress')));
  readonly inProgressCustomersCount$ = this.inProgressCustomers$.pipe(map(list => list.length));

  constructor() { }


  removeCustomer(id: number) {
    const items = this.listChanged.value.filter(x => x.id !== id);
    this.listChanged.next(items);
  }

  initList(customers: Customer[]) {
    this.listChanged.next(customers);
  }

  loadAllItems() {



  }


}
