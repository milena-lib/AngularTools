import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { debounceTime, filter, map, Observable } from 'rxjs';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-count-ver2',
  templateUrl: './count-ver2.component.html',
  styleUrls: ['./count-ver2.component.scss']
})
export class CountVer2Component implements OnInit {
  counter$: Observable<number>;

  constructor(private counterService: CountService) { }

  ngOnInit(): void {
    // const x = this.counterService.counter$;
    // const x1 = this.counterService.counter$.pipe(map(x => x.toString()));
    // const x2 = this.counterService.counter$.pipe(filter(x => x % 2 === 0));

    this.counter$ = this.counterService.counter$.pipe(
      debounceTime(500),
      map(num => num * 10))
  }

  plus() {
    this.counterService.plus();
  }

  minus() {
    this.counterService.minus();
  }

}
