import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() {}
}
