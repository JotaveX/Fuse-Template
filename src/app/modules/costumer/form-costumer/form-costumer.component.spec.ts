import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCostumerComponent } from './form-costumer.component';

describe('FormCostumerComponent', () => {
  let component: FormCostumerComponent;
  let fixture: ComponentFixture<FormCostumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCostumerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCostumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
