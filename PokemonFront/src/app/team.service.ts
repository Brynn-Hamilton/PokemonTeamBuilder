import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from './team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  getAllTeams(cb: any){
    this.http.get<Team[]>('https://localhost:7225/team').subscribe(cb);
  }

  getOneTeam(cb: any, team_id: number){
    this.http.get<Team>(`https://localhost:7225/team/${team_id}`).subscribe(cb)
  }

  getAllTeamsbyTrainer(cb: any, trainer_id: number){
    this.http.get<Team>(`https://localhost:7225/team/trainer/${trainer_id}`).subscribe(cb)
  }

  addTeam(cb: any, team: Team){
    this.http.post<Team>('https://localhost:7225/team/', team).subscribe(cb)
  }

  updateTeam(cb: any, team: Team){
    this.http.put<Team>('https://localhost:7225/team/', team).subscribe(cb)
  }

  deleteTeam(cb: any, team_id: number){
    this.http.delete<Team>(`https://localhost:7225/team/${team_id}`).subscribe(cb)
  }
  constructor(private http: HttpClient) { }
}
