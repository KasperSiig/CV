import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertsComponent } from './certs.component';
import {MatCardModule, MatIconModule} from '@angular/material';

describe('CertsComponent', () => {
  let component: CertsComponent;
  let fixture: ComponentFixture<CertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertsComponent ],
      imports: [
        MatCardModule,
        MatIconModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
