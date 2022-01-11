import { Injectable } from '@angular/core';
import { Group, Team, Player, groups } from './interfaces';
import { from, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WorldCupService {

  constructor() { }

  getAllGroups(): Observable<Group[]>{
    return of(groups);
  }

  getGroup(idGroup: number): Observable<Group>{
    const group: Group = groups.find((group: Group) => group.id === idGroup)!
    return of(group)
  }

}
