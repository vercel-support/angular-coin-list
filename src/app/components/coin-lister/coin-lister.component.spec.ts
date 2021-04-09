import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinListerComponent } from './coin-lister.component';

describe('CoinListerComponent', () => {
  let component: CoinListerComponent;
  let fixture: ComponentFixture<CoinListerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinListerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinListerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
