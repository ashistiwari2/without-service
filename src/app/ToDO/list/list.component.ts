import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
todoitems;
  constructor() {
    this.todoitems=["ng new app_name","ng generate component" ,"ng serve"]
   }

  ngOnInit(): void {
  }

}
