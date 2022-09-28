import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable, Subject, switchMap } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-search-on-server',
  templateUrl: './search-on-server.component.html',
  styleUrls: ['./search-on-server.component.scss']
})
export class SearchOnServerComponent implements OnInit {

  searchChanged = new Subject<string>();
  customers$: Observable<Customer[]>;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const a = this.searchChanged.pipe(map(x => x.length));
    const b = this.searchChanged.pipe(map(x => new Date(x.length)));
    this.customers$ = this.searchChanged.pipe(
      switchMap(x => this.http.get<Customer[]>("http://localhost:44375/people?name=" + x)));

  }

}
