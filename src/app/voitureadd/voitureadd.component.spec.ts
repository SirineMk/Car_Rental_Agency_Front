import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureaddComponent } from './voitureadd.component';

describe('VoitureaddComponent', () => {
  let component: VoitureaddComponent;
  let fixture: ComponentFixture<VoitureaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoitureaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoitureaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
