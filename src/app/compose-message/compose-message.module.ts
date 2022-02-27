import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ComposeMessageComponent } from './compose-message.component';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: ComposeMessageComponent,
  },
];

@NgModule({
  declarations: [ComposeMessageComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatButtonModule,
  ],
})
export class ComposeMessageModule {}
