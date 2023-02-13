import { EventEmitter, Injectable } from '@angular/core';
import { UserInformationData } from '../model/UserInformationData.model';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {
  // public allUserInfoEmitter:EventEmitter<UserInformationData> = new EventEmitter();
  constructor() { }
}
