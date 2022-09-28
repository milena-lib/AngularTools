import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountVer2Component } from './count-ver2.component';

describe('CountVer2Component', () => {
  let component: CountVer2Component;
  let fixture: ComponentFixture<CountVer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountVer2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountVer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
