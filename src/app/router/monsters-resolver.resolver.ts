// import { Injectable } from '@angular/core';
// import {
//   Resolve,
//   RouterStateSnapshot,
//   ActivatedRouteSnapshot,
// } from '@angular/router';
// import { Observable, of } from 'rxjs';
// import { MonstersService } from '../monsters/monsters.service';
// import { Monster } from '../monsters/monster.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class MonstersResolverResolver implements Resolve<boolean> {
//   //lazy dros dainaxavs ?
//   constructor(private monstersService: MonstersService) {}

//   resolve(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean> | boolean {
//     return this.monstersService.fetchMonsters();
//   }
// }
