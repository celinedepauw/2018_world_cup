import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from '../interfaces';
import { WorldCupService } from '../world-cup.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  groups: Group[] = [];
  
  constructor(
    private worldCupService: WorldCupService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.worldCupService.getAllGroups()
    .subscribe(groups => this.groups = groups)
  }

  goToGroupComponent(id: number){
    this.router.navigateByUrl(`/group/${id}`)
  }
}
