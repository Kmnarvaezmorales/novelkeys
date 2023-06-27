import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliesPageComponent } from './supplies-page.component';

describe('SuppliesPageComponent', () => {
  let component: SuppliesPageComponent;
  let fixture: ComponentFixture<SuppliesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppliesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuppliesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
