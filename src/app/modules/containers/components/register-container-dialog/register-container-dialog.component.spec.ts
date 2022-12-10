import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterContainerDialogComponent } from './register-container-dialog.component';

describe('RegisterContainerDialogComponent', () => {
  let component: RegisterContainerDialogComponent;
  let fixture: ComponentFixture<RegisterContainerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterContainerDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterContainerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
