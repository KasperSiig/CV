import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {BasicInfo} from '../../models/BasicInfo';
import {Education} from '../../models/Education';
import {Experience} from '../../models/Experience';
import {Job} from '../../models/Job';

export interface ICV {

  /* Variables */
  isSaved: BehaviorSubject<boolean>;
  basicInfo: BehaviorSubject<BasicInfo>;

  /* Read */
  /**
   * Fetches data from, and creates link to Firebase
   */
  fetchBasicInfo();

  /**
   * Returns an Observable containing an array of Education
   */
  getEducation(): Observable<Education[]>;

  /**
   * Returns an Observable containing an array of Experience
   */
  getExperiences(): Observable<Experience[]>;

  /**
   * Returns an Observable containing an array of Job
   */
  getJobs(): Observable<Job[]>;
  /* Update */
  /**
   * Updates BehaviorSubject in ICV
   * @param about New text in about field
   */
  updateAbout(about: string);

  /**
   * Sends the updated data to firestore
   */
  save();


}
