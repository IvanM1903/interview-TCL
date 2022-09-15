import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KittensImageComponent } from './kittens-image.component';

describe('KittensImageComponent', () => {
  let component: KittensImageComponent;
  let fixture: ComponentFixture<KittensImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KittensImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KittensImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
