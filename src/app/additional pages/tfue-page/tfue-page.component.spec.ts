import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TfuePageComponent } from './tfue-page.component';

describe('TfuePageComponent', () => {
  let component: TfuePageComponent;
  let fixture: ComponentFixture<TfuePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TfuePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TfuePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
