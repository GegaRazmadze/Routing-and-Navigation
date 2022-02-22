import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CrimesCenterComponent } from './crimes-center/crimes-center.component';
import { CrimesCenterHomeComponent } from './crimes-center-home/crimes-center-home.component';
import { CrimesDetailComponent } from './crimes-detail/crimes-detail.component';
import { CrimesListComponent } from './crimes-list/crimes-list.component';
import { CrimesRoutingModule } from './crimes-routing.module';
import { CrimesMaterialModule } from './material-crimes.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CrimesCenterComponent,
    CrimesCenterHomeComponent,
    CrimesDetailComponent,
    CrimesListComponent,
  ],
  imports: [
    CommonModule,

    FormsModule,

    HttpClientModule,
    CrimesRoutingModule,
    CrimesMaterialModule,
  ],
})
export class CrimesModule {}
