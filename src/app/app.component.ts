// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './pages/home/home.component.html',
  styleUrls: ['./pages/home/home.component.scss']
})
export class AppComponent {
  title = 'angular-vbarboza';
}
