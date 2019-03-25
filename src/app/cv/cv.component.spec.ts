import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CvComponent} from './cv.component';
import {BasicInfoComponent} from '../basic-info/basic-info.component';
import {ExtendedInfoComponent} from '../extended-info/extended-info.component';
import {MatCardModule, MatFormFieldModule, MatIconModule} from '@angular/material';
import {ImageCropperModule} from 'ngx-image-cropper';
import {CertsComponent} from '../certs/certs.component';
import {EducationComponent} from '../cv-components/education/education.component';
import {LanguagesComponent} from '../cv-components/languages/languages.component';
import {AboutComponent} from '../cv-components/about/about.component';
import {ExperiencesComponent} from '../cv-components/experiences/experiences.component';
import {JobsComponent} from '../cv-components/jobs/jobs.component';
import {ZeroYearPipe} from '../shared/models/shared/pipes/zero-year.pipe';
import {BasicInfo} from '../shared/models/BasicInfo';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Education} from '../shared/models/Education';
import {Experience} from '../shared/models/Experience';
import {Job} from '../shared/models/Job';
import { firestore } from 'firebase';
import Timestamp = firestore.Timestamp;

describe('CvComponent', () => {
  let component: CvComponent;
  let fixture: ComponentFixture<CvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CvComponent,
        BasicInfoComponent,
        ExtendedInfoComponent,
        CertsComponent,
        EducationComponent,
        LanguagesComponent,
        AboutComponent,
        ExperiencesComponent,
        JobsComponent,
        AboutComponent,
        ZeroYearPipe
      ],
      imports: [
        MatCardModule,
        ImageCropperModule,
        MatIconModule,
        MatFormFieldModule
      ],
      providers: [
        {provide: 'ICvService', useClass: CvServiceStub}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class CvServiceStub {
  basicInfo = new BehaviorSubject<BasicInfo>(this.createBasic());
  isSaved = new BehaviorSubject<boolean>(true);

  createBasic(): BasicInfo {
    const basic = new BasicInfo();
    basic.about = '';
    basic.imageUrl = '';
    basic.langs = [];
    basic.address = '';
    basic.birthday = new Timestamp(31264531, 0);
    basic.email = '';
    basic.name = '';
    basic.phone = 0;
    basic.title = '';
    return basic;
  }

  fetchBasicInfo() {}

  getEducation(): Observable<Education[]> {
    return of([]);
  }

  getExperiences(): Observable<Experience[]> {
    return of([]);
  }

  getJobs(): Observable<Job[]> {
    return of([]);
  }
}
