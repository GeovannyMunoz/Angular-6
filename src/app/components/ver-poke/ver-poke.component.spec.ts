import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPokeComponent } from './ver-poke.component';

describe('VerPokeComponent', () => {
  let component: VerPokeComponent;
  let fixture: ComponentFixture<VerPokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerPokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
