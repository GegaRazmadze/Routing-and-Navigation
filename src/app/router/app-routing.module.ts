import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { WelcomeComponent } from '../welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {
    path: 'welcome',
    component: WelcomeComponent,
    data: { animation: 'first' },
  },
  {
    path: 'crimes-center',
    loadChildren: () =>
      import('../crimes/crimes.module').then((m) => m.CrimesModule),
    data: { animation: 'second' },
  },
  {
    path: 'monsters',
    loadChildren: () =>
      import('../monsters/monsters.module').then((m) => m.MonstersModule),
    data: { animation: 'third' },
  },
  {
    path: 'compose',
    loadChildren: () =>
      import('../compose-message/compose-message.module').then(
        (m) => m.ComposeMessageModule
      ),
    outlet: 'popup',
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
