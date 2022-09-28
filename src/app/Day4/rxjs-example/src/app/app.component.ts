import { Component, OnInit } from '@angular/core';
import { CountService } from './services/count.service';
import { CustomersService } from './services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'first-app';
  count = 0;
  showAll = false;
  constructor(private counterService: CountService, private customersService: CustomersService) {

  }

  ngOnInit(): void {

    this.customersService.initList([
      { id: 1, name: 'David Kribushe', email: 'dasdsad@gmail.com', status: 'Handled' },
      { id: 2, name: 'Gilad Kribushe', email: 'gilad@gmail.com', status: 'Handled' },
      { id: 3, name: 'Pola  Kribushe', email: 'pola@gmail.com', status: 'InProgress' },
      { id: 4, name: 'Koko Kribushe', email: 'koko@gmail.com', status: 'Handled' },
      { id: 5, name: 'Tal Kribushe', email: 'tal@gmail.com', status: 'InProgress' },
      { id: 6, name: 'Tamir Kribushe', email: 'tamir@gmail.com', status: 'InProgress' },
      { id: 7, name: 'Shimon Kribushe', email: 'shimon@gmail.com', status: 'Handled' },
      { id: 8, name: 'Tehila Kribushe', email: 'tehila@gmail.com', status: 'InProgress' },
      { id: 9, name: 'Naama Kribushe', email: 'naama@gmail.com', status: 'Handled' },
      { id: 20, name: 'Moshe Kribushe', email: 'moshe@gmail.com', status: 'InProgress' }
    ]);


    // this.count = this.counterService.count;
    this.counterService.counter$.subscribe(newCount => {
      this.count = newCount;
    });

  }
}
