import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeycapsPageComponent } from './keycaps-page.component';

describe('KeycapsPageComponent', () => {
  let component: KeycapsPageComponent;
  let fixture: ComponentFixture<KeycapsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeycapsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeycapsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
