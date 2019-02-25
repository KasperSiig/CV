import {Observable} from 'rxjs';

export interface ICV {
  updateField(input: string, field: string);

  getDocument(document: string): Observable<any | undefined>;
}
