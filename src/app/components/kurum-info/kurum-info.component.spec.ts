import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurumInfoComponent } from './kurum-info.component';

describe('KurumInfoComponent', () => {
  let component: KurumInfoComponent;
  let fixture: ComponentFixture<KurumInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KurumInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KurumInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
