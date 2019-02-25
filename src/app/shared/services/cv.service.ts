import { Injectable } from '@angular/core';
import {ICV} from '../interfaces/services/icv';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {BasicInfo} from '../models/BasicInfo';
import {Education} from '../models/Education';
import {Job} from '../models/Job';
import {Experience} from '../models/Experience';

@Injectable({
  providedIn: 'root'
})
export class CvService implements ICV {

  constructor(private storage: AngularFireStorage,
              private db: AngularFirestore) { }

  updateField(input: string, field: string) {
  }

  getBasicInfo(): Observable<BasicInfo> {
    return this.db.doc<BasicInfo>('cv/info').valueChanges();
  }

  getEducation(): Observable<Education[]> {
    return this.db.collection<Education>('educations').valueChanges();
  }

  getExperiences(): Observable<Experience[]> {
    return this.db.collection<Experience>('experiences').valueChanges();
  }

  getJobs(): Observable<Job[]> {
    return this.db.collection<Job>('jobs').valueChanges();
  }
}
