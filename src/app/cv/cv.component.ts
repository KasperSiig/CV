import {Component, Inject, OnInit} from '@angular/core';
import {ICV} from '../shared/interfaces/services/icv';
import {BasicInfo} from '../shared/models/BasicInfo';
import {Subscription} from 'rxjs';
import {Education} from '../shared/models/Education';
import {Experience} from '../shared/models/Experience';
import {Job} from '../shared/models/Job';
import {switchMap} from 'rxjs/operators';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  basicInfo: BasicInfo;
  educations: Education[];
  experiences: Experience[];
  jobs: Job[];

  sub: Subscription;

  constructor(@Inject('InterfaceCV') private CvService: ICV) { }

  ngOnInit() {
    this.sub = this.CvService.getBasicInfo()
      .pipe(
        switchMap(basicInfo => {
          this.basicInfo = basicInfo;
          return this.CvService.getEducation();
        })
      ).pipe(
        switchMap(educations => {
          this.educations = educations;
          return this.CvService.getExperiences();
        })
      ).pipe(
        switchMap(experiences => {
          this.experiences = experiences;
          console.log(experiences);
          return this.CvService.getJobs();
        })
      ).subscribe(jobs => {
        this.jobs = jobs;
      });
  }

}
