import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Monster } from '../monster.model';
import { MonstersService } from '../monsters.service';

@Component({
  selector: 'app-monster-list',
  templateUrl: './monster-list.component.html',
  styleUrls: ['./monster-list.component.scss'],
})
export class MonsterListComponent implements OnInit {
  monsters!: Monster[];
  panelOpenState = false;

  constructor(
    private monstersService: MonstersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.monsters = this.monstersService.getMonsters;
  }
}
