import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrimesComponent } from '../crimes/crimes.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { WelcomeComponent } from '../welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '', component: WelcomeComponent },
  {
    path: 'monsters',
    loadChildren: () =>
      import('../monsters/monsters.module').then((m) => m.MonstersModule),
  },
  { path: 'crimes', component: CrimesComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
