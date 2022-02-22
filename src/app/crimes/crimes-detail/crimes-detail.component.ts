import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Crime } from '../crimes.model';
import { CrimesService } from '../crimes.service';

@Component({
  selector: 'app-crimes-detail',
  templateUrl: './crimes-detail.component.html',
  styleUrls: ['./crimes-detail.component.scss'],
})
export class CrimesDetailComponent implements OnInit {
  crime$!: Observable<Crime>;
  constructor(
    private crimesService: CrimesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.crime$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.crimesService.getCrime(params.get('id')!)
      )
    );
  }

  save() {}

  cancel() {}

  private gotoCrimes() {
    // const crimeId = this.crime$ ? this.crime$.id : null;
    this.router.navigate(['../', { foo: 'foo' }], { relativeTo: this.route });
  }
}
