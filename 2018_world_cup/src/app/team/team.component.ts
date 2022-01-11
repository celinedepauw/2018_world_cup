import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Team, groups} from '../interfaces';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team!: Team;
  groupId!: number;
  teamId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;

    if (routeParams.get('groupId') && Number(routeParams.get('groupId'))) {  // if groupId est bien passé en paramètre et groupId peut bien être converti en Number
      this.groupId = Number(routeParams.get('groupId'));
      if (this.groupId) {  // if groupId existe
        if(routeParams.get('teamId') && Number(routeParams.get('teamId'))) { // si teamId est en param et que peut être converti en number
          this.teamId = Number(routeParams.get('teamId'));
          if(this.teamId) {
            groups.forEach(group => {
              if(group.id === this.groupId) {
                this.team = group.teams.find(team => team.id === this.teamId)!;
              }
            });
          } else { // si teamId n'existe pas
            this.router.navigateByUrl('/home')
          }
        } else {
          this.router.navigateByUrl('/home')
        }
      } else { // si groupId n'existe pas
        this.router.navigateByUrl('/home')
      }
    }     
  }

  goBackToComponent(){
    this.router.navigateByUrl(`/group/${this.groupId}`)
  }

}
