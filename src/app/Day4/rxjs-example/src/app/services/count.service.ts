import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  private counterChanged = new BehaviorSubject<number>(0);
  readonly counter$ = this.counterChanged.asObservable();

  plus() {
    this.counterChanged.next(this.counterChanged.value + 1);
  }
  minus() {
    this.counterChanged.next(this.counterChanged.value - 1);
  }
}



