import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevComponent } from './webDev.component';

describe('StitchophrenicComponent', () => {
  let component: WebDevComponent;
  let fixture: ComponentFixture<WebDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});