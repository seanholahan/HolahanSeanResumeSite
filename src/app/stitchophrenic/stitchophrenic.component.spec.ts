import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StitchophrenicComponent } from './stitchophrenic.component';

describe('StitchophrenicComponent', () => {
  let component: StitchophrenicComponent;
  let fixture: ComponentFixture<StitchophrenicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StitchophrenicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StitchophrenicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
