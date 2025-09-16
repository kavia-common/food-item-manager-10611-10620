import { Component } from '@angular/core';

/**
 * HomeComponent renders the 'home' screen derived from the provided static HTML/CSS.
 * It uses absolute-positioned elements to maintain pixel-accurate fidelity with the Figma design.
 */
// PUBLIC_INTERFACE
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /** No JS interactions specified in the source static screen. Reserved for future logic. */
}
