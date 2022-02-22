import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Crime } from '../crimes.model';
import { CrimesService } from '../crimes.service';

@Component({
  selector: 'app-crimes-list',
  templateUrl: './crimes-list.component.html',
  styleUrls: ['./crimes-list.component.scss'],
})
export class CrimesListComponent implements OnInit {
  crimes$!: Observable<Crime[]>;

  constructor(
    private crimeService: CrimesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.crimes$ = this.crimeService.getCrimes;
  }
}
