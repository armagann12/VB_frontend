import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurumUserDialogComponent } from './kurum-user-dialog.component';

describe('KurumUserDialogComponent', () => {
  let component: KurumUserDialogComponent;
  let fixture: ComponentFixture<KurumUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KurumUserDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KurumUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
