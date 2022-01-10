import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Group, groups } from '../interfaces';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  group: Group | undefined;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const groupId = Number(routeParams.get('groupId'));

    this.group = groups.find(
      (group) => group.id === groupId
    )
    console.log(this.group!.name)
  }

}
