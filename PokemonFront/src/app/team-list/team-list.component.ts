import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teamList: Team[] = [];
  
  team: Team = {
    team_id: 0, team_name: '', trainer_id: 0,
    trainer_name: '', pokemon: []
  };

  viewTeamOn: boolean = false;
  editMode: boolean = false;

  constructor(private TeamSrv: TeamService) { 
    this.refresh();
  }

  refresh(){
    this.TeamSrv.getAllTeams(
      (result: Team[]) => {
        this.teamList = result;
      }
    )
  }

  ngOnInit(): void {
  }

  save(team: Team){
    this.TeamSrv.addTeam(
      (result: Team) => {
        this.refresh();
      },
      team
    );
  }

  update(team: Team){
    this.TeamSrv.updateTeam(
      (result: Team) => {
        this.refresh();
      },
      team
    )
    this.viewTeamOn = false;
    this.editMode = false;
  }

  delete(id: number){
    this.TeamSrv.deleteTeam(
      () => {
        this.refresh();
      },
      id
    )
    this.viewTeamOn = false;
    this.editMode = false;
  }

  cancel(){
    this.viewTeamOn = false;
    this.editMode = false;
  }

  updateTeamOn(id: number) {
    this.TeamSrv.getOneTeam(
      (result: Team) => {
        this.team = result;
      },

      id
    )
    this.editMode = true;
  }

  viewTeam(id: number) {
    this.TeamSrv.getOneTeam(
      (result: Team) => {
        this.team = result;
      },

      id
    )
    this.viewTeamOn = true;
  }
}