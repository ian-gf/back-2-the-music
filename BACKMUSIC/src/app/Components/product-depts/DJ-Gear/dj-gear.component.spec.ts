import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DJGearComponent } from './dj-gear.component';

describe('DJGearComponent', () => {
  let component: DJGearComponent;
  let fixture: ComponentFixture<DJGearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DJGearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DJGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
