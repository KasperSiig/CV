import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import {MatCardModule, MatFormFieldModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {ZeroYearPipe} from '../../shared/models/shared/pipes/zero-year.pipe';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
        ZeroYearPipe
      ],
      imports: [
        MatCardModule,
        ReactiveFormsModule,
        MatFormFieldModule
      ],
      providers: [
        {provide: 'ICvService', useClass: CvServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    component.about = '';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class CvServiceStub {
  updateAbout(about: string) {};
}
