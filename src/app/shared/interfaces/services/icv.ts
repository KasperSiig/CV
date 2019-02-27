import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {BasicInfo} from '../../models/BasicInfo';
import {Education} from '../../models/Education';
import {Experience} from '../../models/Experience';
import {Job} from '../../models/Job';

export interface ICV {

  isSaved: BehaviorSubject<boolean>;
  basicInfo: BehaviorSubject<BasicInfo>;

  fetchBasicInfo();
  getEducation(): Observable<Education[]>;
  getExperiences(): Observable<Experience[]>;
  getJobs(): Observable<Job[]>;

  updateAbout(about: string);

  save();
}
