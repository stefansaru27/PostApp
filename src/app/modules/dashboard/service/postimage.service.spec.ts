import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostimageService {
  private selectedFlagSubject = new BehaviorSubject<string | null>(null);
  private apiUrl = 'https://restcountries.com/v3.1/region/europe';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getSelectedFlag(): Observable<string | null> {
    return this.selectedFlagSubject.asObservable();
  }

  setSelectedFlag(flagUrl: string) {
    this.selectedFlagSubject.next(flagUrl);
  }
}
