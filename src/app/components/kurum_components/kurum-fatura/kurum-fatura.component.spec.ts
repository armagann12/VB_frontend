import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurumFaturaComponent } from './kurum-fatura.component';

describe('KurumFaturaComponent', () => {
  let component: KurumFaturaComponent;
  let fixture: ComponentFixture<KurumFaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KurumFaturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KurumFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
