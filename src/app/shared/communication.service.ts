import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private listStateSubject = new BehaviorSubject<string>('grid');

  setListState(newState: string): void {
    this.listStateSubject.next(newState);
  }

  getListState(): Observable<string> {
    return this.listStateSubject.asObservable();
  }

}
