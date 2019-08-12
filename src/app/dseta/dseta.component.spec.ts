import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsetaComponent } from './dseta.component';

describe('DsetaComponent', () => {
  let component: DsetaComponent;
  let fixture: ComponentFixture<DsetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
