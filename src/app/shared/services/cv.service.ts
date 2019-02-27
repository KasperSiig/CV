import {Injectable} from '@angular/core';
import {ICV} from '../interfaces/services/icv';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFirestore} from '@angular/fire/firestore';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {BasicInfo} from '../models/BasicInfo';
import {Education} from '../models/Education';
import {Job} from '../models/Job';
import {Experience} from '../models/Experience';
import {first, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CvService implements ICV {

  basicInfo = new BehaviorSubject<BasicInfo>(null);
  isSaved = new BehaviorSubject<boolean>(true);

  constructor(private storage: AngularFireStorage,
              private db: AngularFirestore) {
  }

  fetchBasicInfo() {
    return this.db.doc<BasicInfo>('cv/info').valueChanges()
      .subscribe(info => {
        this.basicInfo.next(info);
      });
  }

  getEducation(): Observable<Education[]> {
    return this.db.collection<Education>('educations').valueChanges();
  }

  getExperiences(): Observable<Experience[]> {
    return this.db.collection<Experience>('experiences').valueChanges();
  }

  getJobs(): Observable<Job[]> {
    return this.db.collection<Job>('jobs').valueChanges()
      .pipe(
        map(jobs => {
          return jobs.sort((joba, jobb) => {
            return jobb.startYear - joba.startYear;
          });
        })
      );
  }

  updateAbout(about: string) {
    const basicInfo = this.basicInfo.value;
    basicInfo.about = about;
    this.basicInfo.next(basicInfo);
    this.isSaved.next(false);
  }

  save() {
    this.db.doc('cv/info').update(this.basicInfo.value);
    this.isSaved.next(true);
  }

}
