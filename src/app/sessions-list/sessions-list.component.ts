import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.scss']
})
export class SessionsListComponent implements OnInit {

  rooms = [
    {},
    {},
    {},
    {},
    {},
    {}
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
