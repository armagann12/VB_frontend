import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardDialogDeleteComponent } from './user-card-dialog-delete.component';

describe('UserCardDialogDeleteComponent', () => {
  let component: UserCardDialogDeleteComponent;
  let fixture: ComponentFixture<UserCardDialogDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCardDialogDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCardDialogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
