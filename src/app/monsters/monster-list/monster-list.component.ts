import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Monster } from '../monster.model';
import { MonstersService } from '../monsters.service';

@Component({
  selector: 'app-monster-list',
  templateUrl: './monster-list.component.html',
  styleUrls: ['./monster-list.component.scss'],
})
export class MonsterListComponent implements OnInit {
  monsters$!: Observable<Monster[]>;
  panelOpenState = false;

  constructor(private monstersService: MonstersService) {}

  ngOnInit(): void {
    this.monsters$ = this.monstersService.monsters$;
  }
}
