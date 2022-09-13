import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFaturaDialogPayComponent } from './user-fatura-dialog-pay.component';

describe('UserFaturaDialogPayComponent', () => {
  let component: UserFaturaDialogPayComponent;
  let fixture: ComponentFixture<UserFaturaDialogPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFaturaDialogPayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFaturaDialogPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
