import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurumComponent } from './kurum.component';

describe('KurumComponent', () => {
  let component: KurumComponent;
  let fixture: ComponentFixture<KurumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KurumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KurumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
