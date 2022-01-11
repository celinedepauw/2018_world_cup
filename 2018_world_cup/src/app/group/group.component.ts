import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Group } from '../interfaces';
import { WorldCupService } from '../world-cup.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  group!: Group;
  groupId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private worldCupService: WorldCupService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    if (routeParams.get('groupId') && Number(routeParams.get('groupId'))) {  // if groupId est bien passé en paramètre et groupId peut bien être converti en Number
      this.groupId = Number(routeParams.get('groupId'));
      if (this.groupId) {  // if groupId existe
        this.worldCupService.getGroup(this.groupId) // CAS OU ON A BIEN UN GROUPID ET UN GROUPE QUI EXISTENT
          .subscribe(group => this.group = group)
        /* sans le service : this.group = groups.find((group: Group) => group.id === this.groupId)!;  */
        if (!this.group) {  // if aucun group ne correspond au groupId
          this.router.navigateByUrl('/home');
        }
      } else {
        this.router.navigateByUrl('/home');
      }
    } else {
      this.router.navigateByUrl('/home');
    }
  }

  goBackHome(){
    this.router.navigateByUrl('/home');
  }

  goToTeamComponent(id: number){
    this.router.navigateByUrl(`/group/${this.groupId}/team/${id}`)
  }

}
