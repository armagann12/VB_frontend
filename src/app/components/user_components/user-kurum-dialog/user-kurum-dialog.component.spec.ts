import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserKurumDialogComponent } from './user-kurum-dialog.component';

describe('UserKurumDialogComponent', () => {
  let component: UserKurumDialogComponent;
  let fixture: ComponentFixture<UserKurumDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserKurumDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserKurumDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
