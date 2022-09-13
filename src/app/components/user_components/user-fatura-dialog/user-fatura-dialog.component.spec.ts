import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFaturaDialogComponent } from './user-fatura-dialog.component';

describe('UserFaturaDialogComponent', () => {
  let component: UserFaturaDialogComponent;
  let fixture: ComponentFixture<UserFaturaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFaturaDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFaturaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
