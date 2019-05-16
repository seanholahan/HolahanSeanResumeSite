import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalLinksComponent } from './professional-links.component';

describe('ProfessionalLinksComponent', () => {
  let component: ProfessionalLinksComponent;
  let fixture: ComponentFixture<ProfessionalLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
