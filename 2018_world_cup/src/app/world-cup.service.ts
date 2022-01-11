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
}
