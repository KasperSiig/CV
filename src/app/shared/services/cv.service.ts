import { Injectable } from '@angular/core';
import {ICV} from '../interfaces/services/icv';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService implements ICV {

  constructor(private storage: AngularFireStorage,
              private db: AngularFirestore) { }

  updateField(input: string, field: string) {
  }

  getDocument(document: string): Observable<any> {
   return this.db.collection('cv').doc(document).valueChanges();
  }
}
