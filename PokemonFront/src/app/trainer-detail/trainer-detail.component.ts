import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Trainer } from '../trainer';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css']
})
export class TrainerDetailComponent implements OnInit {

  @Input() trainer: Trainer = {id: 0, name: '', email: ''};

  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  @Output() save: EventEmitter<Trainer> = new EventEmitter<Trainer>();

  deleteMe(){
    this.delete.emit(this.trainer.id);
  }

  editMode: boolean = false;
  editName: string = '';
  editEmail: string = '';

  goToEdit(){
    this.editMode = true;
    this.editName = this.trainer.name;
    this.editEmail = this.trainer.email;
  }

  saveEdit(){
    this.editMode = false;
    this.trainer.name = this.editName;
    this.trainer.email = this.editEmail;
    this.save.emit(this.trainer);
  }

  cancelEdit(){
    this.editMode = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
