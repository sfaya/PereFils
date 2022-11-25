import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-accounts-component',
  templateUrl: './list-accounts-component.component.html',
  styleUrls: ['./list-accounts-component.component.css']
})
export class ListAccountsComponentComponent implements OnInit {
@Input() category!:String;
  constructor() { }

  ngOnInit(): void {
  }

}
