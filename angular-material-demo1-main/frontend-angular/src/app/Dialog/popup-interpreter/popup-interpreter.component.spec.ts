import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupInterpreterComponent } from './popup-interpreter.component';

describe('PopupInterpreterComponent', () => {
  let component: PopupInterpreterComponent;
  let fixture: ComponentFixture<PopupInterpreterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupInterpreterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopupInterpreterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
