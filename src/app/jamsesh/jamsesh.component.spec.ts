import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JamseshComponent } from './jamsesh.component';

describe('JamseshComponent', () => {
  let component: JamseshComponent;
  let fixture: ComponentFixture<JamseshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JamseshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JamseshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
