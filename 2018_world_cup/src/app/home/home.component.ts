import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { groups } from '../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  groups = groups;
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToGroupComponent(id: number){
    this.router.navigateByUrl(`/group/${id}`)
  }
}
