import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { CustomersService } from 'src/app/services/people.service';

@Component({
  selector: 'app-pepole',
  templateUrl: './pepole.component.html',
  styleUrls: ['./pepole.component.scss']
})
export class PepoleComponent implements OnInit {
  onlyInProgressItems$: Observable<Customer[]>;
  customers$: Observable<Customer[]>;
  count$: Observable<number>;

  showInProgresCustomers = false;
  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
    this.customers$ = this.customersService.customers$;
    this.count$ = this.customersService.inProgressCustomersCount$;
    this.onlyInProgressItems$ = this.customersService.inProgressCustomers$;
  }

  removecustomer(c: Customer) {
    this.customersService.removeCustomer(c.id);
  }

}
