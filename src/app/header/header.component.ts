import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  inpValue: string = '';
  @ViewChild('inp') inpCtrl: ElementRef;

  inputCtrl = new FormControl('');
  @Output() msgText = new EventEmitter<string>();

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {   
  }

  sendMessage(message) {
    this.messageService.sendMessage(message);
    this.inpCtrl.nativeElement.value = '';
  }

  sendValue(message) {
    this.inpValue = message;
    this.messageService.sendMessage(message);
    this.inpValue = '';
  }

  send(message) {
    this.msgText.emit(message);
    this.inputCtrl.setValue('');
  }
}
