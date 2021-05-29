import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicDrumsComponent } from './electronic-drums.component';

describe('ElectronicDrumsComponent', () => {
  let component: ElectronicDrumsComponent;
  let fixture: ComponentFixture<ElectronicDrumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicDrumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicDrumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
