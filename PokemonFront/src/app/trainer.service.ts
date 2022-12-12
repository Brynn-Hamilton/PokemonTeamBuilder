import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trainer } from './trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  getAllTrainers(cb: any){
    this.http.get<Trainer[]>('https://localhost:7225/trainer').subscribe(cb);
  }


  getOneTrainer(cb: any, trainer_id: number){
    this.http.get<Trainer>(`https://localhost:7225/trainer/${trainer_id}`).subscribe(cb)
  }

  addTrainer(cb: any, trainer: Trainer){
    this.http.post<Trainer>('https://localhost:7225/trainer/', trainer).subscribe(cb)
  }

  updateTrainer(cb: any, trainer: Trainer){
    this.http.put<Trainer>('https://localhost:7225/trainer/', trainer).subscribe(cb)
  }

  deleteTrainer(cb: any, trainer_id: number){
    this.http.delete<Trainer>(`https://localhost:7225/trainer/${trainer_id}`).subscribe(cb)
  }

  constructor(private http: HttpClient) { }
}
