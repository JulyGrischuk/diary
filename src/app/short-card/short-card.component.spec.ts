import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortCardComponent } from './short-card.component';

describe('ShortCardComponent', () => {
  let component: ShortCardComponent;
  let fixture: ComponentFixture<ShortCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
