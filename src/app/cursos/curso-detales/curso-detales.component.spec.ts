import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDetalesComponent } from './curso-detales.component';

describe('CursoDetalesComponent', () => {
  let component: CursoDetalesComponent;
  let fixture: ComponentFixture<CursoDetalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoDetalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoDetalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
