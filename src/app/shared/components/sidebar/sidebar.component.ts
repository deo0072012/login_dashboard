import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
opened:false
  constructor() { }
  @ViewChild('drawer', { static: false }) 
  drawer: MatSidenav;

  ngOnInit() {
  }


}
