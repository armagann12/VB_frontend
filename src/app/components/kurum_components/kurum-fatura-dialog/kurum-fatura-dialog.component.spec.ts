import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurumFaturaDialogComponent } from './kurum-fatura-dialog.component';

describe('KurumFaturaDialogComponent', () => {
  let component: KurumFaturaDialogComponent;
  let fixture: ComponentFixture<KurumFaturaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KurumFaturaDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KurumFaturaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
