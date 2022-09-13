import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurumUserComponent } from './kurum-user.component';

describe('KurumUserComponent', () => {
  let component: KurumUserComponent;
  let fixture: ComponentFixture<KurumUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KurumUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KurumUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
