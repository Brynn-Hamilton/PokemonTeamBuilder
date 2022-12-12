import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Trainer } from '../trainer';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-add-trainer',
  templateUrl: './add-trainer.component.html',
  styleUrls: ['./add-trainer.component.css']
})
export class AddTrainerComponent implements OnInit {
  
  TheTrainers: Trainer[] = [];
  newTrainer: Trainer = {id: 0, name: '', email: ''};

  refresh(){
    this.TrainerSrv.getAllTrainers(
      (result: Trainer[]) => {
        this.TheTrainers = result;
      }
    )
  }

  save(trainer: Trainer){
    this.TrainerSrv.addTrainer(
      () => {},
      trainer
      );
  }

  constructor(private TrainerSrv: TrainerService) {
    TrainerSrv.getAllTrainers(
      (result: Trainer[]) => {
        this.TheTrainers = result;
      }
    );
    this.refresh();
   }

  ngOnInit(): void {
  }

}
