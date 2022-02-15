import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonsterDetailComponent } from './monster-detail/monster-detail.component';
import { MonsterListComponent } from './monster-list/monster-list.component';

const routes: Routes = [
  {
    path: '',
    component: MonsterListComponent,
    children: [{ path: ':id', component: MonsterDetailComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonstersRoutingModule {}
