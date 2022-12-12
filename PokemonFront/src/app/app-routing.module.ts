import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamListComponent } from './team-list/team-list.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { AddTrainerComponent } from './add-trainer/add-trainer.component';
import { TeamByTrainerListComponent } from './team-by-trainer-list/team-by-trainer-list.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: 'teams', component: TeamListComponent},
  { path: 'addteam', component: AddTeamComponent },
  { path: 'trainers', component: TrainerListComponent },
  { path: 'addtrainer', component: AddTrainerComponent },
  { path: 'trainerteams', component: TeamByTrainerListComponent },
  { path: 'pokemon', component: PokemonListComponent },
  { path: '', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
