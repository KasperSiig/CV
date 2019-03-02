import { firestore } from 'firebase';
import Timestamp = firestore.Timestamp;

export class BasicInfo {
  about: string;
  imageUrl: string;
  address: string;
  birthday: Timestamp;
  email: string;
  langs: string[];
  name: string;
  phone: number;
  title: string;
}
