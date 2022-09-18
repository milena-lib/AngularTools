import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private subject = new BehaviorSubject<string>('burger');

  private isBtnClicked$ = new Subject<boolean>(); 

  constructor() {}

  sendMessage(message: string) {
    this.subject.next(message);
  }

  receivedMessage(): Observable<string> {
    return this.subject.asObservable();
  }

  setClicked(isClicked: boolean) {
    this.isBtnClicked$.next(isClicked);
  }

  getClicked(): Observable<boolean> {
    return this.isBtnClicked$.asObservable();
  }

}
