import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPartyComponent } from './add-party.component';

describe('AddPartyComponent', () => {
  let component: AddPartyComponent;
  let fixture: ComponentFixture<AddPartyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPartyComponent]
    });
    fixture = TestBed.createComponent(AddPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
