import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedInfoComponent } from './extended-info.component';
import {AboutComponent} from '../cv-components/about/about.component';
import {ExperiencesComponent} from '../cv-components/experiences/experiences.component';
import {JobsComponent} from '../cv-components/jobs/jobs.component';
import {MatCardModule, MatFormFieldModule} from '@angular/material';
import {ZeroYearPipe} from '../shared/models/shared/pipes/zero-year.pipe';
import {BasicInfo} from '../shared/models/BasicInfo';

describe('ExtendedInfoComponent', () => {
  let component: ExtendedInfoComponent;
  let fixture: ComponentFixture<ExtendedInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExtendedInfoComponent,
        AboutComponent,
        ExperiencesComponent,
        JobsComponent,
        ZeroYearPipe
      ],
      imports: [
        MatCardModule,
        MatFormFieldModule
      ],
      providers: [
        {provide: 'ICvService', useClass: CvServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedInfoComponent);
    component = fixture.componentInstance;
    component.basicInfo = new BasicInfo();
    component.basicInfo.about = '';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class CvServiceStub {

}
