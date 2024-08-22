import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupInvoiceComponent } from './popup-invoice.component';

describe('PopupInvoiceComponent', () => {
  let component: PopupInvoiceComponent;
  let fixture: ComponentFixture<PopupInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupInvoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopupInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
