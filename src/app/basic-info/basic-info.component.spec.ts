import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoComponent } from './basic-info.component';
import {MatCardModule, MatIconModule} from '@angular/material';
import {ImageCropperModule} from 'ngx-image-cropper';
import {CertsComponent} from '../certs/certs.component';
import {EducationComponent} from '../cv-components/education/education.component';
import {LanguagesComponent} from '../cv-components/languages/languages.component';
import {ZeroYearPipe} from '../shared/models/shared/pipes/zero-year.pipe';
import {CvService} from '../shared/services/cv.service';
import {ICvService} from '../shared/interfaces/services/ICvService';
import {BehaviorSubject} from 'rxjs';
import {BasicInfo} from '../shared/models/BasicInfo';

describe('BasicInfoComponent', () => {
  let component: BasicInfoComponent;
  let fixture: ComponentFixture<BasicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BasicInfoComponent,
        CertsComponent,
        EducationComponent,
        LanguagesComponent,
        ZeroYearPipe
      ],
      imports: [
        MatCardModule,
        MatIconModule,
        ImageCropperModule
      ],
      providers: [
        {provide: 'ICvService', useClass: CvServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class CvServiceStub {
  basicInfo = new BehaviorSubject<BasicInfo>(new BasicInfo());
}
