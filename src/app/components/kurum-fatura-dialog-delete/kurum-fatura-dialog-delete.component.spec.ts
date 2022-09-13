import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurumFaturaDialogDeleteComponent } from './kurum-fatura-dialog-delete.component';

describe('KurumFaturaDialogDeleteComponent', () => {
  let component: KurumFaturaDialogDeleteComponent;
  let fixture: ComponentFixture<KurumFaturaDialogDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KurumFaturaDialogDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KurumFaturaDialogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
