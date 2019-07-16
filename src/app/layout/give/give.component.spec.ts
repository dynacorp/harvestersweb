import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GiveComponent } from './give.component';
import { GiveModule } from './give.module';

describe('GiveComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ GiveModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(GiveComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
