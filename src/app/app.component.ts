import { Component } from '@angular/core';
import { NominaComponent } from './nomina/nomina.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NominaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

}
