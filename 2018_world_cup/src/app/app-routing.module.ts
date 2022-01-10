import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './group/group.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path:'', component: LoginComponent },
  { path:'home', component: HomeComponent },
  { path:'group', children:[
    { path: ':groupId', component: GroupComponent },
    { path: ':groupId/team/:teamId', component: TeamComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
