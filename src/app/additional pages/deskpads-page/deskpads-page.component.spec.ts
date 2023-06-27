import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskpadsPageComponent } from './deskpads-page.component';

describe('DeskpadsPageComponent', () => {
  let component: DeskpadsPageComponent;
  let fixture: ComponentFixture<DeskpadsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeskpadsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeskpadsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
