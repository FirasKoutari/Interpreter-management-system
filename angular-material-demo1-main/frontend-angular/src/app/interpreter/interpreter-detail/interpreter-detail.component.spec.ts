import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpreterDetailComponent } from './interpreter-detail.component';

describe('InterpreterDetailComponent', () => {
  let component: InterpreterDetailComponent;
  let fixture: ComponentFixture<InterpreterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterpreterDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterpreterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
