import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BasicInfoComponent} from './basic-info.component';
import {MatCardModule, MatIconModule} from '@angular/material';
import {ImageCropperModule} from 'ngx-image-cropper';
import {CertsComponent} from '../certs/certs.component';
import {EducationComponent} from '../cv-components/education/education.component';
import {LanguagesComponent} from '../cv-components/languages/languages.component';
import {ZeroYearPipe} from '../shared/models/shared/pipes/zero-year.pipe';
import {ICvService} from '../shared/interfaces/services/ICvService';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {BasicInfo} from '../shared/models/BasicInfo';

describe('BasicInfoComponent', () => {
  let component: BasicInfoComponent;
  let fixture: ComponentFixture<BasicInfoComponent>;
  let cvServiceMock: any;

  beforeEach(async(() => {
    cvServiceMock = jasmine.createSpyObj<ICvService>(['getBasicInfo']);
    cvServiceMock.getBasicInfo.and.returnValue(of([]));
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
        {provide: 'ICvService', useValue: cvServiceMock}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Simple HTML', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('TypeScript functions', () =>  {
    it('should toggle isEditingPic', () =>  {
      component.onToggleEditPic();
      expect(component.isEditingPic).toBe(true);
    });
  });
});

class CvServiceStub {
  basicInfo = new BehaviorSubject<BasicInfo>(new BasicInfo());

  getBasicInfo() {
    return this.basicInfo.asObservable();
  }
}

