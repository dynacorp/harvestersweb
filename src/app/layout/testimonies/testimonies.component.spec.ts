import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TestimoniesComponent } from './testimonies.component';
import { TestimoniesModule } from './testimonies.module';

describe('TestimoniesComponent', () => {
  let component: TestimoniesComponent;
  let fixture: ComponentFixture<TestimoniesComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [TestimoniesModule, RouterTestingModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimoniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
