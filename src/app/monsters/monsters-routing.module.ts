import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MonstersResolverResolver } from '../router/monsters-resolver.resolver';
import { MonsterDetailComponent } from './monster-detail/monster-detail.component';
import { MonsterListComponent } from './monster-list/monster-list.component';

const routes: Routes = [
  {
    path: '',
    component: MonsterListComponent,
    // resolve: {
    //   hero: MonstersResolverResolver,
    // },
    children: [
      { path: ':id', component: MonsterDetailComponent, pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonstersRoutingModule {}
