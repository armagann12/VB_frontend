import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserKurumComponent } from './user-kurum.component';

describe('UserKurumComponent', () => {
  let component: UserKurumComponent;
  let fixture: ComponentFixture<UserKurumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserKurumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserKurumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
