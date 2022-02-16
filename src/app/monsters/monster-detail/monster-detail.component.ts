import { Component, OnInit } from '@angular/core';
import { Monster } from '../monster.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MonstersService } from '../monsters.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-monster-detail',
  templateUrl: './monster-detail.component.html',
  styleUrls: ['./monster-detail.component.scss'],
})
export class MonsterDetailComponent implements OnInit {
  monster$!: Observable<Monster>;
  monsterName: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private monsterService: MonstersService
  ) {}

  ngOnInit(): void {
    this.monster$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.monsterService.getMonster(params.get('id')!)
      )
    );
  }

  monsterNameChange(monsterId: number) {
    this.monsterService.changeMonsterName(monsterId, this.monsterName);
  }
}
