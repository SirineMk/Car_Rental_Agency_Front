import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationaddComponent } from './locationadd.component';

describe('LocationaddComponent', () => {
  let component: LocationaddComponent;
  let fixture: ComponentFixture<LocationaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
