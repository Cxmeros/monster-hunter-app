import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchMonster: BehaviorSubject<string> = new BehaviorSubject<string>('');
}
