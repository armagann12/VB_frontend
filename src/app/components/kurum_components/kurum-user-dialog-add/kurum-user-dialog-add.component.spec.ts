import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurumUserDialogAddComponent } from './kurum-user-dialog-add.component';

describe('KurumUserDialogAddComponent', () => {
  let component: KurumUserDialogAddComponent;
  let fixture: ComponentFixture<KurumUserDialogAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KurumUserDialogAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KurumUserDialogAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
