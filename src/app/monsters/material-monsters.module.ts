import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [MatExpansionModule, MatIconModule, MatCardModule],
  exports: [MatExpansionModule, MatIconModule, MatCardModule],
})
export class MaterialMonstersModule {}
