import { Component, OnInit } from '@angular/core';
import { Trainer } from '../trainer';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css']
})
export class TrainerListComponent implements OnInit {

  trainerList: Trainer[] = [];
  trainer: Trainer = {
    id: 0, name: '', email: ''
  }

  constructor(private TrainerSrv: TrainerService) { 
    this.refresh();

  }

  refresh(){
    this.TrainerSrv.getAllTrainers(
      (result: Trainer[]) => {
        this.trainerList = result;
        this.GetTrainer(this.trainerList[0].id.toString())
      }
    )
  }

  GetTrainer(id: string){
    this.TrainerSrv.getOneTrainer(
      (result: Trainer) => {
        this.trainer = result
      },
      parseInt(id)
    )
  }

  save(trainer: Trainer){
    this.TrainerSrv.addTrainer(

      (result: Trainer) => {
        this.refresh();
      },
      trainer

    );
  }

  saveEdit(trainer: Trainer){
    this.TrainerSrv.updateTrainer(

      (result: Trainer) => {
        this.refresh();
      },
      trainer

    );
  }


  deleteOne(id: number){
    this.TrainerSrv.deleteTrainer(
      () => {
        this.refresh();
      },
      id
    );
  }


  ngOnInit(): void {
  }

}