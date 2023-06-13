import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoferListComponent } from './chofer-list.component';

describe('ChoferListComponent', () => {
  let component: ChoferListComponent;
  let fixture: ComponentFixture<ChoferListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoferListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
