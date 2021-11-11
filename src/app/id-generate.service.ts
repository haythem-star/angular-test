import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdGenerateService {
  id_emit = new Subject<string>();
  displaySubject = new Subject<boolean>();

  constructor() { }
}
