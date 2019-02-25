import { Injectable } from '@angular/core';
import {ICV} from '../interfaces/services/icv';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CvService implements ICV {

  constructor(private storage: AngularFireStorage,
              private db: AngularFirestore) { }

  updateField(input: string, field: string) {
  }

  getDocument
}
