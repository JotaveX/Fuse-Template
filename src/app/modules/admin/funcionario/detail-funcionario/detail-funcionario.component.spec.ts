import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFuncionarioComponent } from './detail-funcionario.component';

describe('DetailFuncionarioComponent', () => {
  let component: DetailFuncionarioComponent;
  let fixture: ComponentFixture<DetailFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFuncionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
