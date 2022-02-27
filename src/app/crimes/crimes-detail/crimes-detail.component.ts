import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { Crime } from '../crimes.model';
import { CrimesService } from '../crimes.service';

@Component({
  selector: 'app-crimes-detail',
  templateUrl: './crimes-detail.component.html',
  styleUrls: ['./crimes-detail.component.scss'],
})
export class CrimesDetailComponent implements OnInit, OnDestroy {
  crime$!: Observable<Crime>;
  editName = '';

  private Subscriptions: Subscription[] = [];

  constructor(
    private crimesService: CrimesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //get crime by Id with router param
    this.crime$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.crimesService.getCrime(params.get('id')!)
      )
    );
    //get crime name and save if user cancels changes And Push sub. to Sub[]
    this.Subscriptions.push(
      this.crime$.pipe(take(1)).subscribe((res) => (this.editName = res.name))
    );
  }

  save() {
    this.gotoCrimes();
  }

  cancel() {
    //Push sub to Sub[]
    this.Subscriptions.push(
      this.crime$.subscribe((res) => (res.name = this.editName))
    );
    this.gotoCrimes();
  }

  private gotoCrimes() {
    // close detain component and redirect back to list
    this.router.navigate(['../', { foo: 'foo' }], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    //unsubscribe each sub,
    this.Subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
