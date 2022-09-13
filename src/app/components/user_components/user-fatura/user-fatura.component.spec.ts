import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFaturaComponent } from './user-fatura.component';

describe('UserFaturaComponent', () => {
  let component: UserFaturaComponent;
  let fixture: ComponentFixture<UserFaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFaturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
