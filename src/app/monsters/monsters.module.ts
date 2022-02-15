import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonstersRoutingModule } from './monsters-routing.module';
import { MonsterListComponent } from './monster-list/monster-list.component';
import { MonsterDetailComponent } from './monster-detail/monster-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialMonstersModule } from './material-monsters.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MonsterListComponent, MonsterDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    MonstersRoutingModule,
    HttpClientModule,
    MaterialMonstersModule,
  ],
})
export class MonstersModule {}
