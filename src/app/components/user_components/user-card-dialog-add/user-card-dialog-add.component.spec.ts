import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardDialogAddComponent } from './user-card-dialog-add.component';

describe('UserCardDialogAddComponent', () => {
  let component: UserCardDialogAddComponent;
  let fixture: ComponentFixture<UserCardDialogAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCardDialogAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCardDialogAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
