import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CRIMES, Crime } from './crimes.model';

@Injectable({
  providedIn: 'root',
})
export class CrimesService {
  private crimes$: BehaviorSubject<Crime[]> = new BehaviorSubject<Crime[]>(
    CRIMES
  );

  get getCrimes() {
    return this.crimes$;
  }

  getCrime(id: number | string) {
    return this.getCrimes.pipe(
      map((crimes) => crimes.find((crime) => crime.id === +id)!)
    );
  }
}
