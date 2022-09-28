import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter, map, max } from 'rxjs/operators';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit, OnDestroy {

  private subs = new Subscription();
  count = 0;
  constructor(private countService: CountService) { }

  ngOnInit(): void {
    const sub = this.countService.counter$
      .pipe(
        map(x => x * 10),
        filter(x => x > 100)
      )
      .subscribe(newCount => {
        this.count = newCount;
        console.log('Current count is ', this.count);
      });
    this.subs.add(sub);
  }

  plus() {
    this.countService.plus();
  }
  minus() {
    this.countService.minus();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
