import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamByTrainerListComponent } from './team-by-trainer-list.component';

describe('TeamByTrainerListComponent', () => {
  let component: TeamByTrainerListComponent;
  let fixture: ComponentFixture<TeamByTrainerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamByTrainerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamByTrainerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
