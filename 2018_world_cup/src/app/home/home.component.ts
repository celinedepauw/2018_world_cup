import { Component, OnInit } from '@angular/core';
import { groups } from '../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  groups = groups;
  
  constructor() { }

  ngOnInit(): void {
  }

}
