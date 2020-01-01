import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoslocationComponent } from './infoslocation.component';

describe('InfoslocationComponent', () => {
  let component: InfoslocationComponent;
  let fixture: ComponentFixture<InfoslocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoslocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoslocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
