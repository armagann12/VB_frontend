import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardDialogMoneyComponent } from './user-card-dialog-money.component';

describe('UserCardDialogMoneyComponent', () => {
  let component: UserCardDialogMoneyComponent;
  let fixture: ComponentFixture<UserCardDialogMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCardDialogMoneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCardDialogMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
