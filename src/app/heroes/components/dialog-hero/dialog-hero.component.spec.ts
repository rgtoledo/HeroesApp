import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHeroComponent } from './dialog-hero.component';

describe('DialogHeroComponent', () => {
  let component: DialogHeroComponent;
  let fixture: ComponentFixture<DialogHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
