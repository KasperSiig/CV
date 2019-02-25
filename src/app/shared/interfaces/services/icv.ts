import {Observable} from 'rxjs';
import {BasicInfo} from '../../models/BasicInfo';
import {Education} from '../../models/Education';
import {Experience} from '../../models/Experience';
import {Job} from '../../models/Job';

export interface ICV {
  updateField(input: string, field: string);

  getBasicInfo(): Observable<BasicInfo>;
  getEducation(): Observable<Education[]>;
  getExperiences(): Observable<Experience[]>;
  getJobs(): Observable<Job[]>;
}
