import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-captions',
  templateUrl: './captions.component.html',
  styleUrls: ['./captions.component.css']
})
export class CaptionsComponent implements OnInit {
  arrMessages: string[]=[];

  isBtnClicked: boolean = false;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  saveMsg($event) {
    this.arrMessages.push($event);
  }

  send(){
    this.messageService.setClicked(true);
  }

}
