import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeadingComponent } from './top-heading.component';

describe('TopHeadingComponent', () => {
  let component: TopHeadingComponent;
  let fixture: ComponentFixture<TopHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
