import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent {
  title = 'Routing-and-Navigation';

  //set Animation State Dynamically
  getAnimationData(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
