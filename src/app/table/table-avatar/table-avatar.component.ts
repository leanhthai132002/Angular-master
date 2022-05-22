import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-avatar',
  templateUrl: './table-avatar.component.html',
  styleUrls: ['./table-avatar.component.css']
})
export class TableAvatarComponent implements OnInit {
  @Input() price: any;
  @Input() src: any;
  constructor() { }

  ngOnInit(): void {
  }

}
