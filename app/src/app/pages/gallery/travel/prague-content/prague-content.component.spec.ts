import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PragueContentComponent } from './prague-content.component';

describe('PragueContentComponent', () => {
  let component: PragueContentComponent;
  let fixture: ComponentFixture<PragueContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PragueContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PragueContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
