import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatButtonToggleModule],
  exports: [MatButtonModule, MatToolbarModule, MatButtonToggleModule],
})
export class MaterialModule {}
