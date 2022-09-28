import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOnServerComponent } from './search-on-server.component';

describe('SearchOnServerComponent', () => {
  let component: SearchOnServerComponent;
  let fixture: ComponentFixture<SearchOnServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchOnServerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchOnServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
