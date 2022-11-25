import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAccountsComponentComponent } from './list-accounts-component.component';

describe('ListAccountsComponentComponent', () => {
  let component: ListAccountsComponentComponent;
  let fixture: ComponentFixture<ListAccountsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAccountsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAccountsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
