import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Monster, MONSTERS } from '../monsters/monster.model';

@Injectable({
  providedIn: 'root',
})
export class MonstersService {
  monsters$: BehaviorSubject<Monster[]> = new BehaviorSubject(MONSTERS);

  constructor() {}

  getMonster(id: string | number) {
    return this.monsters$.pipe(
      map(
        (monstersArr: Monster[]) =>
          monstersArr.find((monster) => monster.id === +id)!
      )
    );
  }

  changeMonsterName(monsterId: number, monsterName: string) {
    MONSTERS.find((monster) => monster.id === monsterId)!.name = monsterName;
    this.monsters$.next([...MONSTERS]);
  }
}
