import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {
  inputCtrl = new FormControl('');
  @Output() msgText = new EventEmitter<string>();

  $subs: Subscription;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.$subs = this.messageService.getClicked().subscribe((event) => {
      if(event) {
        console.log("inputCtrl: ", this.inputCtrl.value);
        
        this.msgText.emit(this.inputCtrl.value);
        this.inputCtrl.setValue("");
      }
    });
  }

}
