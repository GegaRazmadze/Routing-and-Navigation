import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrimesCenterHomeComponent } from './crimes-center-home/crimes-center-home.component';
import { CrimesCenterComponent } from './crimes-center/crimes-center.component';
import { CrimesDetailComponent } from './crimes-detail/crimes-detail.component';
import { CrimesListComponent } from './crimes-list/crimes-list.component';

const routes: Routes = [
  {
    path: '',
    component: CrimesCenterComponent,
    children: [
      {
        path: '',
        component: CrimesListComponent,
        children: [
          {
            path: ':id',
            component: CrimesDetailComponent,
          },
          {
            path: '',
            component: CrimesCenterHomeComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrimesRoutingModule {}
