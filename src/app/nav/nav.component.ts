import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('collapse', [
      state('open', style({
        opacity: '1',
        transition: 'opacity ease-in'
      })),
      state('closed',   style({
        opacity: '0.8'
      })),
      transition('closed => open', animate('500ms ease-in'))
    ])
  ]
})
export class NavComponent implements OnInit {

  collapse:string = "closed";
  show:boolean=false;
  toggleCollapse() {
    this.show = !this.show
    this.collapse = this.collapse == "open" ? 'closed' : 'open';
    // console.log(this.collapse);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
