import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoJqueryComponent } from './uso-jquery.component';

describe('UsoJqueryComponent', () => {
  let component: UsoJqueryComponent;
  let fixture: ComponentFixture<UsoJqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsoJqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsoJqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
