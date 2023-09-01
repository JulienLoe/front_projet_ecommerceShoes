import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeelComponent } from './page-heel.component';

describe('PageHeelComponent', () => {
  let component: PageHeelComponent;
  let fixture: ComponentFixture<PageHeelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageHeelComponent]
    });
    fixture = TestBed.createComponent(PageHeelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
